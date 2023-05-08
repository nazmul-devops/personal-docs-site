(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(t,s,a){t.exports=a.p+"assets/img/route-53-1.0245bb78.png"},302:function(t,s,a){t.exports=a.p+"assets/img/route-53-2.0785e103.png"},303:function(t,s,a){t.exports=a.p+"assets/img/godaddy-paste.a205741c.png"},304:function(t,s,a){t.exports=a.p+"assets/img/route-53-3.0fbbb06a.png"},305:function(t,s,a){t.exports=a.p+"assets/img/route-53-4.165e2395.png"},334:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"here-we-will-deploy-a-php-laravel-webapp-in-a-ubuntu-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-we-will-deploy-a-php-laravel-webapp-in-a-ubuntu-server"}},[t._v("#")]),t._v(" Here we will deploy a php laravel webapp in a ubuntu server")]),t._v(" "),s("h2",{attrs:{id:"prerequisites-git-php7-4-mysql-server-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-git-php7-4-mysql-server-composer"}},[t._v("#")]),t._v(" prerequisites - (git, php7.4, mysql-server, composer)")]),t._v(" "),s("h2",{attrs:{id:"step-01-installing-php7-4-on-ubuntu-22-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-01-installing-php7-4-on-ubuntu-22-04"}},[t._v("#")]),t._v(" Step 01: (Installing php7.4 on ubuntu 22.04)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" software-properties-common\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:ondrej/php\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" php7.4\n\n\tphp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("To verify Installation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" php7.4-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cli,common,curl,zip,gd,mysql,xml,mbstring,json,intl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-02-install-composer-for-dependency-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-02-install-composer-for-dependency-management"}},[t._v("#")]),t._v(" Step 02: (Install Composer for dependency management)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\tphp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"copy('https://getcomposer.org/installer', 'composer-setup.php');\"")]),t._v("\n\tphp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"")]),t._v("\n\tphp composer-setup.php\n\tphp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"unlink('composer-setup.php');\"")]),t._v("\n\n\t php composer.phar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n\n\t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" composer.phar /usr/local/bin/composer\n\n\t "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\n\n\t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-03-installing-mysql-server-and-create-demo-database-for-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-03-installing-mysql-server-and-create-demo-database-for-project"}},[t._v("#")]),t._v(" Step 03: (Installing Mysql-server and create demo database for project)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" mysql-server\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status mysql\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mysql\n")])])]),s("h2",{attrs:{id:"configuring-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mysql"}},[t._v("#")]),t._v(" Configuring MySQL")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mysql\n\n\tALTER "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v(" IDENTIFIED WITH mysql_native_password BY "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n\tmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n\n\tcreate database your-database-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"creating-a-dedicated-mysql-user-and-granting-privileges-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-dedicated-mysql-user-and-granting-privileges-optional"}},[t._v("#")]),t._v(" Creating a Dedicated MySQL User and Granting Privileges (Optional)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mysql\n\n\tmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n\n\tCREATE "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nazmul'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v(" IDENTIFIED BY "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tGRANT PRIVILEGE ON database.table TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nazmul'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tGRANT ALL PRIVILEGES ON *.* TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nazmul'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v(" WITH GRANT OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tFLUSH PRIVILEGES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n\tmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" nazmul "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n")])])]),s("h2",{attrs:{id:"testing-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-mysql"}},[t._v("#")]),t._v(" Testing MySQL")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status mysql\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mysqladmin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" nazmul version\n")])])]),s("h2",{attrs:{id:"step-04-cloning-git-repo-to-root-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-04-cloning-git-repo-to-root-directory"}},[t._v("#")]),t._v(" Step 04: (Cloning git repo to root directory)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/html\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitlab.com/niswapan/abcfan-website.git\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" abcfan-website abc\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" ubuntu:ubuntu /var/www/html/abc/*\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" /var/www/html/abc/*\n\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" abc\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" .env.example .env\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" .env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("change the database name as your created your-database-name and root user password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-05-configure-web-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-05-configure-web-server"}},[t._v("#")]),t._v(" Step 05: Configure web server")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/apache2/sites-enabled\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" 000-default.conf\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paste")]),t._v(" below texts and save "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n\t ServerAdmin webmaster@localhost\n         DocumentRoot /var/www/html/abc/public\n\n         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Directory /var/www/html/abc/public"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                Options Indexes FollowSymLinks MultiViews\n                AllowOverride All\n                Order allow,deny\n                allow from all\n         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2enmod rewrite\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart apache2\n")])])]),s("h2",{attrs:{id:"step-06-configure-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-06-configure-application"}},[t._v("#")]),t._v(" Step 06: Configure application")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" your browser and hit your-server-ip\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/html/abc/\n\nphp artisan key:generate\n\nphp artisan migrate\n\n")])])]),s("h2",{attrs:{id:"step-06-how-to-bind-with-your-domain-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-06-how-to-bind-with-your-domain-name"}},[t._v("#")]),t._v(" Step 06: How to bind with your domain name")]),t._v(" "),s("ol",[s("li",[t._v("Goto Route53 on aws console and Create a hosted zone with your valid domain name in my case (abcfanbd.com)")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(301),alt:"create-aws-route-53-hosted-zone"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("Copy 4 NS records from aws route 53 hosted zone"),s("br"),t._v(" "),s("img",{attrs:{src:a(302),alt:"copy-aws-route-53-hosted-zones-ns-records"}})])]),t._v(" "),s("li",[s("p",[t._v("Paste on your domain provider dns nameserver. In my case its Godaddy.com")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(303),alt:"paste-ns-records-on-godaddy"}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("On your aws hosted zone add 3 more simple A record")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(304),alt:"add-3-a-records"}})]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Finally Hit your domain abcfanbd.com")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(305),alt:"your-webapp-is-live-now"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);