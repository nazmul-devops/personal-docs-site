---
sidebar: auto
---

# How to configure Nginx web server as reverse proxy and load balancer
By: Nazmul Islam (Swapan) - DevOps Engineer 

## AWS secure environment setup:
- Create a vpc on your preferred aws region (172.20.0.0/16)

- Create 1 public subnet for public facing webserver (172.20.10.0/24)

- Create 2 private subnet for serving web application to the public server on 2 differant availability zone (172.20.20.0/24) and (172.20.30.0/24)

- Create 1 IGW and attached to your vpc

- Create 1 NAT gateway on public subnet to access internet from private subnets

- Create 3 Route Table for each subnet and associate accordingly and add route 0.0.0.0/0 via igw on public route table and add route 0.0.0.0/0 via nat gateway on private subnets.

- Create 1 Ec2 ubuntu server on public subnet and add security group with ssh, http access.

- Create 2 Ec2 ubuntu server on private subnet on 2 differant availability zone with ssh and http access.

## Configuring Nginx public web server as load balancer and reverse proxy 
    
- Nginx 
> Nginx is an open source, fast, lightweight and high-performance web server that can be used to serve static files. NGINX is considered as the popular web server behind Apache web server and Microsoft's IIS. NGINX improves content and application delivery, improves security, and facilitates scalability and availability for the busiest websites on the internet.
- Nginx Reverse Proxy
> A proxy is a server that resides between internal applications and external clients, forwarding client requests to the appropriate server. An Nginx reverse proxy server is a proxy server that resides behind the firewall in a private network and directs client requests to the appropriate backend server. A reverse proxy gives an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.

- ssh to your public ec2 ubuntu instance to prepare the environment

```sh
ssh -i "your-pem-key.pem" ubuntu@your-public-ip

sudo apt update

sudo apt install -y docker.io

sudo docker run -itd -p 80:80 --name nginx-lb --restart=always nginx:latest

sudo docker exec -it nginx-lb bash

apt update

apt install nano

```

### How to configure Nginx as a reverse proxy

- Open the Nginx configuration file with elevated rights.
- Map a URI to the upstream cluster with a proxy_pass location setting.
- Restart the Nginx server to incorporate the config changes.

```sh
sudo docker exec -it nginx-lb bash

nano /etc/nginx/conf.d/default.conf

    location / {
        root   /usr/share/nginx/html;

        index  index.html index.htm;

        proxy_pass   http://your-private-server-ip:port/;

    }

control+x then yes to save and exit the file.

nginx -t 

nginx -s reload

```


### How to configure Nginx as a load balancer

- Open the Nginx configuration file with elevated rights.
- Define an upstream element and list each node in your backend cluster.
- Map a URI to the upstream cluster with a proxy_pass location setting.
- Restart the Nginx server to incorporate the config changes.

```sh
sudo docker exec -it nginx-lb bash

nano /etc/nginx/conf.d/default.conf

upstream webservers {
    server 172.20.20.25:8080;
    server 172.20.30.35:8090;
    server your-server-ip:port;
}

location / {
        root   /usr/share/nginx/html;

        index  index.html index.htm;

        proxy_pass   http://webservers/;
    }

control+x then yes to save and exit the file.

nginx -t 

nginx -s reload

```


## Configuring Nginx on private subnet's ec2 as web application server 01

- ssh on your private ec2 ubuntu instances from your public ec2 server with pem key to prepare the web server

- to copy the pem key from your local machine to public server use below command

```sh
scp -i your-pem-key.pem ~/your-file-path-on-local-machine/ ubuntu@your-ec2-public-server-ip:~/your-desired-location

ssh -i "your-pem-key.pem" ubuntu@your-private-server-ip

sudo apt update

sudo apt install docker.io 

scp -i your-pem-key.pem -r ~/your-file-path-on-local-machine/ ubuntu@your-ec2-private-server-ip:~/your-desired-location 

(This web-content should be copied from your public server. Or you can clone your git repo to your private server directly)

sudo git -v 

sudo git clone git@gitlab.com:your-account/your-repo.git

sudo docker run -itd -p 8080:80 --name web-server1 --restart=always -v ~/your--git-repo-location:/usr/share/nginx/html nginx:latest

sudo docker ps -a

curl localhost:8080

```

## Configuring Nginx on private subnet's ec2 as web application server 02

- ssh on your private ec2 ubuntu instances from your public ec2 server with pem key to prepare the web server

- to copy the pem key from your local machine to public server use below command

```sh
scp -i your-pem-key.pem ~/your-file-path-on-local-machine/ ubuntu@your-ec2-public-server-ip:~/your-desired-location

ssh -i "your-pem-key.pem" ubuntu@your-private-server-ip

sudo apt update

sudo apt install docker.io 

scp -i your-pem-key.pem -r ~/your-file-path-on-local-machine/ ubuntu@your-ec2-private-server-ip:~/your-desired-location 

(This web-content should be copied from your public server. Or you can clone your git repo to your private server directly)

sudo git -v 

sudo git clone git@gitlab.com:your-account/your-repo.git

sudo docker run -itd -p 8090:80 --name web-server2 --restart=always -v ~/your--git-repo-location:/usr/share/nginx/html nginx:latest

sudo docker ps -a

curl localhost:8090

```

