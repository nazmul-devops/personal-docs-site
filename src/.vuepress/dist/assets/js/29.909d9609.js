(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{332:function(e,t,n){"use strict";n.r(t);var s=n(10),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jenkins-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-tutorial"}},[e._v("#")]),e._v(" Jenkins Tutorial")]),e._v(" "),t("p",[e._v("By Nazmul Islam (Swapan) - Junior DevOps Engineer at InNeed Cloud")]),e._v(" "),t("h2",{attrs:{id:"what-is-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-jenkins"}},[e._v("#")]),e._v(" What is Jenkins?")]),e._v(" "),t("p",[e._v("Jenkins is an open-source automation server that helps automate various aspects of software development, including building, testing, and deploying software applications. Jenkins is widely used for continuous integration (CI) and continuous delivery (CD) pipelines, which are key practices in modern software development.")]),e._v(" "),t("p",[e._v("Jenkins provides a vast collection of plugins that extend its functionality and enable integration with various third-party tools and services. It also offers a web-based interface that makes it easy to configure and manage jobs and pipelines.")]),e._v(" "),t("p",[e._v("Using Jenkins, developers can automate the process of building and testing their code every time they make changes, which helps detect and fix issues quickly. Jenkins can also automate the process of deploying software to various environments, such as development, testing, and production.")]),e._v(" "),t("p",[e._v("Overall, Jenkins is a powerful tool for automating software development processes and helping teams improve their development workflows.")]),e._v(" "),t("h2",{attrs:{id:"why-we-should-use-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-we-should-use-jenkins"}},[e._v("#")]),e._v(" Why we should use Jenkins?")]),e._v(" "),t("p",[e._v("Why should we use Jenkins?")]),e._v(" "),t("p",[e._v("There are several reasons why you might consider using Jenkins in your software development process:")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Automation:")]),e._v(" Jenkins automates various aspects of the software development process, including building, testing, and deployment. This can save you time and reduce the likelihood of human errors.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Flexibility:")]),e._v(" Jenkins provides a wide range of plugins that enable integration with various tools and services. This means you can use Jenkins to build and test code written in many different programming languages and deploy to many different environments.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Scalability:")]),e._v(" Jenkins can scale to support large development teams and complex software projects. You can use Jenkins to manage multiple pipelines and jobs, distribute builds across multiple agents, and run tests in parallel.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Visibility:")]),e._v(" Jenkins provides a web-based interface that makes it easy to monitor the status of builds, tests, and deployments. This can help you quickly identify and fix issues in your code.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Community Support:")]),e._v(" Jenkins is an open-source project with a large and active community. This means there are many resources available online, including documentation, tutorials, and support forums.")])])]),e._v(" "),t("p",[e._v("Overall, Jenkins can help you streamline your software development process, improve code quality, and accelerate time to market.")]),e._v(" "),t("h1",{attrs:{id:"installing-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-jenkins"}},[e._v("#")]),e._v(" Installing Jenkins")]),e._v(" "),t("p",[e._v("Ref: https://www.jenkins.io/doc/book/installing/docker/")]),e._v(" "),t("h2",{attrs:{id:"how-to-install-jenkins-on-ubuntu-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-jenkins-on-ubuntu-server"}},[e._v("#")]),e._v(" How to install jenkins on ubuntu server.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openjdk-11-jre\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-version")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fsSL")]),e._v(" https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  /usr/share/keyrings/jenkins-keyring.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" deb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("signed-by"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/share/keyrings/jenkins-keyring.asc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  https://pkg.jenkins.io/debian-stable binary/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  /etc/apt/sources.list.d/jenkins.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v(" jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-aG")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" jenkins\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-aG")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),t("h3",{attrs:{id:"installation-error-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-error-handling"}},[e._v("#")]),e._v(" Installation Error handling")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dpkg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--configure")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-a")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" clean\n")])])]),t("h2",{attrs:{id:"how-to-install-jenkins-on-redhat-rocky-linux-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-jenkins-on-redhat-rocky-linux-server"}},[e._v("#")]),e._v(" How to install jenkins on Redhat/Rocky Linux server.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-O")]),e._v(" /etc/yum.repos.d/jenkins.repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    https://pkg.jenkins.io/redhat-stable/jenkins.repo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--import")]),e._v(" https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum upgrade\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add required dependencies for the jenkins package")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" java-11-openjdk\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl daemon-reload\n")])])]),t("p",[e._v("Now open your web browser and navigate to http://your-server-ip:8080. You should see the Jenkins login page.")]),e._v(" "),t("h2",{attrs:{id:"how-to-create-jenkins-pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-jenkins-pipeline"}},[e._v("#")]),e._v(" How to create jenkins pipeline")]),e._v(" "),t("p",[e._v("Ref: "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=nplH3BzKHPk&t=1s",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouTube Video Tutorial Link"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("Live DevOps Project for Resume - Jenkins CICD with GitHub Integration")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("To create a Jenkins freestyle pipeline from a GitHub repository, you can follow these steps:")])]),e._v(" "),t("li",[t("p",[e._v("Open Jenkins in your web browser and log in.")])]),e._v(" "),t("li",[t("p",[e._v('Click on "New Item" in the left-hand menu.')])]),e._v(" "),t("li",[t("p",[e._v('Enter a name for your pipeline and select "Freestyle project" as the project type. Click "OK".')])]),e._v(" "),t("li",[t("p",[e._v('Scroll down to the "Source Code Management" section and select "Git" as the repository type.')])]),e._v(" "),t("li",[t("p",[e._v('Enter the URL of your GitHub repository in the "Repository URL" field.')])]),e._v(" "),t("li",[t("p",[e._v('In the "Credentials" field, select the username and password or SSH key that you will use to authenticate with the repository.')])]),e._v(" "),t("li",[t("p",[e._v("Here you must add ssh key on your github setting from your server's public ssh key.")])]),e._v(" "),t("li",[t("p",[e._v('In the "Branches to build" field, enter the branch that you want to build.')])]),e._v(" "),t("li",[t("p",[e._v('Scroll down to the "Build" section and click "Add build step".')])]),e._v(" "),t("li",[t("p",[e._v('Select the type of build step that you want to add, such as "Execute shell" or "Invoke Gradle script".')])]),e._v(" "),t("li",[t("p",[e._v("Enter the commands that you want to run in the build step.")])]),e._v(" "),t("li",[t("p",[e._v('Click "Save" to save your pipeline.')])]),e._v(" "),t("li",[t("p",[e._v('Click "Build Now" to run your pipeline. You should see the status of each build step as it runs.')])])]),e._v(" "),t("p",[e._v("That's it! You have created a Jenkins freestyle pipeline from a GitHub repository. You can now modify your build steps and rerun your pipeline as needed.")]),e._v(" "),t("h2",{attrs:{id:"jenkins-execute-shell-command-for-automated-docker-build-and-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-execute-shell-command-for-automated-docker-build-and-run"}},[e._v("#")]),e._v(" Jenkins execute shell command for automated docker build and run.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop the existing container with the same name")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Remove the existing image with the same name")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" rmi "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("image_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build and run the new container")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("image_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-itd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":8000 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("image_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"how-to-connect-jenkins-with-guthub-webhook-for-automatic-trigger-after-code-push-to-github-main-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-jenkins-with-guthub-webhook-for-automatic-trigger-after-code-push-to-github-main-branch"}},[e._v("#")]),e._v(" How to connect jenkins with guthub webhook for automatic trigger after code push to github main branch.")]),e._v(" "),t("h4",{attrs:{id:"integrating-jenkins-webhook-with-github-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrating-jenkins-webhook-with-github-repo"}},[e._v("#")]),e._v(" Integrating Jenkins Webhook with GitHub Repo")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Go to "),t("code",[e._v("Settings > Webhooks")]),e._v(" in your GitHub project.")])]),e._v(" "),t("li",[t("p",[e._v("Click on the "),t("code",[e._v("Add webhook")]),e._v(" button.")])]),e._v(" "),t("li",[t("p",[e._v("Enter the Jenkins webhook URL in the "),t("code",[e._v("Payload URL")]),e._v(" field. The webhook URL should be in the format "),t("code",[e._v("http://<jenkins_server>/github-webhook/")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Optionally, you can specify a secret token for added security.")])]),e._v(" "),t("li",[t("p",[e._v("Choose the events that you want to trigger the webhook. For example, you can select "),t("code",[e._v("Push events")]),e._v(", "),t("code",[e._v("Pull request events")]),e._v(", and "),t("code",[e._v("Tag push events")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Click on the "),t("code",[e._v("Add webhook")]),e._v(" button to save the webhook.")])])]),e._v(" "),t("p",[e._v("Now that you've set up the webhook on the GitHub repository, you need to configure Jenkins to receive the webhook notifications.")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[e._v('In Jenkins, go to "Manage Jenkins" > "Configure System".')])]),e._v(" "),t("li",[t("p",[e._v('Scroll down to the "GitHub" section and click the "Advanced" button.')])]),e._v(" "),t("li",[t("p",[e._v('In the "GitHub Web Hook" section, check the "Specify another hook URL for GitHub configuration" checkbox.')])]),e._v(" "),t("li",[t("p",[e._v('Enter the same URL you used for the "Payload URL" field in the GitHub webhook configuration.')])]),e._v(" "),t("li",[t("p",[e._v('Click the "Save" button to save the configuration.')])]),e._v(" "),t("li",[t("p",[e._v("In your Jenkins instance, create a new pipeline project or open an existing one.")])]),e._v(" "),t("li",[t("p",[e._v("Go to the "),t("code",[e._v("Configure")]),e._v(" page for the project and scroll down to the "),t("code",[e._v("Build Triggers")]),e._v(" section.")])]),e._v(" "),t("li",[t("p",[e._v("Check the "),t("code",[e._v("GitHub hook trigger for GITScm polling")]),e._v(" option.")])]),e._v(" "),t("li",[t("p",[e._v("Save the project configuration.")])])]),e._v(" "),t("p",[e._v("Jenkins is now configured to receive webhook notifications from your GitHub repository. When you push changes to the repository, Jenkins will automatically build and test your code. And now, every time a GitHub event is triggered, GitHub will send a webhook to the Jenkins URL specified in the GitHub project settings, and Jenkins will run the pipeline project according to the configured settings.")]),e._v(" "),t("p",[e._v("Note: You may need to configure your Jenkins server to handle incoming webhooks from GitHub. This can be done by installing and configuring the "),t("code",[e._v("GitHub Plugin")]),e._v(" in your Jenkins instance.")])])}),[],!1,null,null,null);t.default=a.exports}}]);