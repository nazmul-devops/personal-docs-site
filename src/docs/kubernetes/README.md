---
sidebar: auto
---

# Kubernetes

By Nazmul Islam (Swapan) - DevOps Engineer at InNeed Cloud

### What is Kubernetes? 

> Kubernetes (often abbreviated as "K8s") is an open-source system for automating the deployment, scaling, and management of containerized applications. It provides a way to manage multiple containers as a single unit, making it easier to deploy, scale, and manage applications in a microservices architecture.

> Kubernetes was originally developed by Google, and is now maintained by the Cloud Native Computing Foundation (CNCF). It is widely adopted and has become the de facto standard for managing containerized applications in production.

### Why we should use Kubernetes?

There are several reasons why organizations choose to use Kubernetes:

1. High Availability: We can deploy any changes to kubernetes with no downtime.

2. Scalability: Kubernetes makes it easy to horizontally scale applications by adding or removing replicas of a container as needed.

3. Resilience: Kubernetes can automatically recover from failures by replacing failed containers and ensuring that the desired number of replicas is maintained.

4. Load balancing: Kubernetes can automatically distribute incoming traffic across multiple replicas of a container to ensure that no single replica becomes a bottleneck.

5. Portability: Kubernetes allows applications to run on different cloud platforms, as well as on-premises, making it easier to deploy applications in different environments.

6. Ease of deployment: Kubernetes provides a unified way to define, deploy, and manage applications, making it easier to roll out updates and rollbacks.

Overall, Kubernetes helps organizations to build, deploy, and manage large-scale, complex applications more efficiently and effectively.

### Kubernetes Main Components & Architechture:


> Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications. The following are the main components of a Kubernetes system:

1. Master node: The Master node is the brain of a Kubernetes cluster and it is responsible for the overall management of the cluster. It exposes the Kubernetes API, and it contains the following components:

- kube-apiserver: Exposes the Kubernetes API.

- etcd: Distributed key-value store for storing the configuration data.
- kube-controller-manager: Handles the state of the cluster, such as replication controllers and endpoints.
- kube-scheduler: Assigns work to nodes.
  
1. Worker node: Worker nodes are where containers are deployed and run. A worker node contains the following components:

- kubelet: Communicates with the Master node and makes sure that containers are running as expected.
- kube-proxy: Acts as a network proxy and load balancer for service requests.
- container run time: we can use any container run time environment like docker or containerd

3. Pods: Pods are the smallest and simplest unit in the Kubernetes object model, and they represent a single instance of a running process in your cluster. Pods contain one or more containers, and they provide shared network and storage resources for those containers.
   
4. Containers: The applications you want to run are packaged into containers, which are lightweight, stand-alone, and executable packages of software that include everything needed to run the application (code, runtime, system tools, libraries, etc.).
   
5. Volumes: Volumes are a way to persist data in your cluster, even if a pod is deleted or recreated. They provide a way to store data on disk or in the cloud, and mount that data into your pods.

6. Services: Services are used to expose your application to the network, allowing it to be accessible from outside the cluster. Services can load balance incoming traffic to multiple pods.

7. Replication Controller: Replication controllers are used to ensure that a specified number of replicas of a pod are running at all times. If a pod goes down, the replication controller will create a new replica to replace it.

8. Deployments: Deployments are higher-level objects that manage replicas and provide declarative updates for your applications. You define your desired state in a deployment, and the deployment controller changes the actual state to the desired state.

9.  ConfigMaps and Secrets: ConfigMaps and Secrets are used to store configuration data and secrets, respectively, for your applications. They can be used to store database passwords, API keys, and other sensitive information.

10. Ingress: Kubernetes Ingress is a collection of routing rules that govern how external users access services running inside a Kubernetes cluster. It provides a way to expose HTTP and HTTPS routes from outside the cluster to services within the cluster.

An Ingress resource defines how requests to a certain path or host should be routed to a specific service within the cluster. For example, you can define a rule that routes requests to the host "www.example.com" to a service that serves a web application. You can also define multiple rules to route requests to different paths or hosts to different services.

Ingress is typically implemented by deploying an Ingress controller, which is a component that watches the API server for updates to the Ingress resource and implements the routing rules accordingly. The Ingress controller can be any web server that implements the Ingress specification, such as Nginx, Traefik, or Istio.

Ingress provides an easy and efficient way to expose your applications to external users and manage the incoming traffic to your services. It can be used to enforce security policies, such as SSL/TLS encryption, basic authentication, and rate limiting, and to handle tasks such as request redirection and URL rewriting.

These are the main components of a Kubernetes system. Understanding these components is crucial for effectively managing and deploying applications on a Kubernetes cluster.

### Minikube Setup on Local machine

Minikube is a tool that allows you to run a single-node Kubernetes cluster on your local machine. You can also set it up on a remote server. Here's how you can set up Minikube on a server:

1. Install virtualization software: Minikube requires a hypervisor to manage virtual machines. You can use VirtualBox, KVM, or Hyper-V as the hypervisor.

2. Install Minikube: You can download Minikube binary for your operating system from the official Minikube website and install it. You can also install Minikube using a package manager like apt or yum.

3. Start Minikube: To start Minikube, you need to run the following command:

```sh
minikube start --driver=<driver_name>
```

4. Verify the installation: To verify that Minikube is running, you can use the following command:

```sh
minikube status
```
This will give you the status of your Minikube cluster, including the Kubernetes version, the URL of the dashboard, and the state of the cluster.

5. Access the dashboard: To access the Minikube dashboard, you can use the following command:

```sh
minikube dashboard
```

### Kubectl commands

Here's a list of some common kubectl commands:

kubectl get: retrieves information about resources in your cluster. For example, kubectl get pods retrieves information about all the pods in your cluster.

kubectl describe: provides detailed information about a specific resource in your cluster. For example, kubectl describe pod <pod_name> provides information about a specific pod.

kubectl apply: creates or updates resources in your cluster. You specify the resource definition in a file and use the apply command to apply it to the cluster.

kubectl delete: deletes resources from your cluster. For example, kubectl delete pod <pod_name> deletes a specific pod.

kubectl create: creates resources in your cluster. For example, kubectl create -f <file_name> creates resources specified in a file.

kubectl edit: edits a resource in your cluster. For example, kubectl edit pod <pod_name> opens an editor for you to edit the specified pod.

kubectl exec: executes a command in a container in a pod. For example, kubectl exec -it <pod_name> -- <command> executes the specified command in a container in the specified pod.

kubectl logs: retrieves logs from a container in a pod. For example, kubectl logs <pod_name> retrieves logs from the specified pod.

kubectl port-forward: forwards a local port to a port on a pod. For example, kubectl port-forward <pod_name> 8080:80 forwards local port 8080 to port 80 on the specified pod.

kubectl label: adds or modifies labels on a resource. For example, kubectl label pod <pod_name> app=myapp adds the label "app=myapp" to the specified pod.

These are just a few examples of the many kubectl commands available. You can find more information about kubectl and its commands in the official Kubernetes documentation.





