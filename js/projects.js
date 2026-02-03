const projects = [
  {
    id: "generalscaler",
    title: "GeneralScaler Operator",
    hero: true,
    summary: "Production-grade Kubernetes operator for universal, policy-driven autoscaling.",
    stack: ["Kubernetes", "Helm", "Python", "GitHub Actions"],
    impact: "Enabled safe, cost-aware autoscaling with SLO guarantees across workloads.",
    description:
      "Designed and implemented a production-grade Kubernetes operator enabling safe, policy-driven autoscaling for any Deployment. Built custom CRDs with pluggable metric sources (Prometheus, Redis, Pub/Sub), implemented SLO-aware and cost-aware scaling logic, and added safety mechanisms such as cooldowns and rate limits. Packaged the operator with Helm and automated testing, linting, and releases using GitHub Actions.",
    github: "https://github.com/Krishna7031/generalscaler-operator"
  },

  {
    id: "secure-cicd",
    title: "Secure CI/CD Pipeline",
    hero: true,
    summary: "Enterprise CI/CD pipeline with integrated quality and security gates.",
    stack: ["Jenkins", "Docker", "SonarQube", "Trivy", "AWS EC2"],
    impact: "Achieved sub-5-minute deployments with zero critical vulnerabilities.",
    description:
      "Designed and implemented a multi-stage CI/CD pipeline integrating Jenkins, SonarQube, Trivy, and Docker. Enforced static code quality gates, blocked vulnerable container images, and automated secure deployments to AWS EC2. The pipeline ensured fast feedback cycles while maintaining high security and code quality standards.",
    github: "https://github.com/Krishna7031/jenkins-automated-cicd-pipeline"
  },

  {
    id: "ebs-cost-optimizer",
    title: "AWS EBS Snapshot Cost Optimizer",
    summary: "Serverless automation to identify and delete orphaned EBS snapshots.",
    stack: ["AWS Lambda", "Python", "CloudWatch", "IAM"],
    impact: "Reduced unnecessary EBS storage costs through automated cleanup.",
    description:
      "Built a serverless AWS automation using Lambda and Python (boto3) to analyze EBS snapshots and safely delete stale or orphaned snapshots. Implemented strict validation against EC2 volume and instance states, applied least-privilege IAM roles, and enabled monitoring and auditing through CloudWatch Logs.",
    github: "https://github.com/Krishna7031/aws-ebs-snapshot-cost-optimizer"
  },

  {
    id: "github-jira",
    title: "GitHub–Jira Automation",
    summary: "Event-driven automation integrating GitHub and Jira.",
    stack: ["Python", "Flask", "GitHub Webhooks", "AWS EC2"],
    impact: "Improved issue tracking efficiency by automating ticket creation.",
    description:
      "Built an event-driven integration between GitHub and Jira using Python and Flask. Configured GitHub webhooks to trigger Jira issue creation, implemented secure API authentication using environment variables, and deployed the service on AWS EC2 with properly configured networking and security groups.",
    github: "https://github.com/Krishna7031/github-jira-integration-using-python-flask"
  },

  {
    id: "serverless-task-tracker",
    title: "Serverless Task Tracker",
    summary: "Full-stack serverless AWS application with secure authentication.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito"],
    impact: "Demonstrated secure, stateless authentication in a serverless architecture.",
    description:
      "Designed and built a full-stack serverless web application on AWS. Hosted the frontend on S3 with CloudFront, implemented backend APIs using Lambda and API Gateway, and stored data in DynamoDB. Secured APIs using Amazon Cognito with JWT-based authorization and enforced access control via API Gateway authorizers.",
    github: "https://github.com/Krishna7031/serverless-task-tracker-app-deployment"
  },

  {
    id: "eks-gitops-retail",
    title: "EKS GitOps Retail App",
    summary: "GitOps-driven microservices deployment on AWS EKS.",
    stack: ["EKS", "Terraform", "ArgoCD", "GitHub Actions"],
    impact: "Enabled reproducible and auditable Kubernetes deployments using GitOps.",
    description:
      "Provisioned an Amazon EKS cluster using Terraform and deployed a retail microservices application using GitOps workflows with ArgoCD. Integrated CI/CD pipelines with GitHub Actions and managed container images in Amazon ECR to enable consistent and automated updates.",
    github: "https://github.com/Krishna7031/retail-store-app"
  },

  {
    id: "terraform-eks",
    title: "Terraform EKS Automation",
    summary: "Automated provisioning of a scalable Amazon EKS cluster.",
    stack: ["Terraform", "Amazon EKS", "AWS Networking"],
    impact: "Delivered reproducible, cost-optimized Kubernetes infrastructure.",
    description:
      "Provisioned a secure and scalable Amazon EKS cluster using Terraform. Designed custom VPC networking, configured managed node groups with spot instances for cost optimization, and integrated core Kubernetes add-ons to deliver a production-ready cluster.",
    github: "https://github.com/Krishna7031/terraform-eks"
  },

  {
    id: "ansible-ec2",
    title: "Ansible EC2 Automation",
    summary: "Automated EC2 configuration and application deployment using Ansible.",
    stack: ["Ansible", "Linux", "Nginx", "AWS EC2"],
    impact: "Eliminated manual SSH and improved deployment consistency.",
    description:
      "Provisioned multiple EC2 instances and automated configuration using Ansible playbooks. Implemented inventory grouping, secure SSH access, and repeatable deployments for NGINX and application workloads.",
    github: "https://github.com/Krishna7031/ansible-playbook-ec2"
  },

  {
    id: "terraform-remote-state",
    title: "Terraform Remote State & Modules",
    summary: "Production-grade Terraform workflows with modules and remote state.",
    stack: ["Terraform", "S3", "DynamoDB"],
    impact: "Improved collaboration and state safety in infrastructure workflows.",
    description:
      "Designed modular Terraform infrastructure using reusable modules and workspaces. Configured a remote backend with S3 for state storage and DynamoDB for state locking, enabling safe multi-environment deployments.",
    github: "https://github.com/Krishna7031/terraform-module-remotestate-workspace"
  },

  {
    id: "terraform-nginx",
    title: "Terraform EC2 with NGINX",
    summary: "Automated EC2 provisioning with NGINX installation.",
    stack: ["Terraform", "Shell", "NGINX"],
    impact: "Reduced manual provisioning through infrastructure automation.",
    description:
      "Provisioned an AWS EC2 instance using Terraform and automated NGINX installation via user-data scripts. Resolved real-world networking and configuration issues while strengthening understanding of Terraform workflows.",
    github: "https://github.com/Krishna7031/terraform-eks"
  },

  {
    id: "k8s-chat-app",
    title: "Kubernetes Chat Application",
    summary: "Multi-tier chat application deployed on Kubernetes.",
    stack: ["Kubernetes", "YAML", "MongoDB"],
    impact: "Demonstrated end-to-end Kubernetes application deployment.",
    description:
      "Deployed a full-stack chat application on Kubernetes using custom-written manifests. Configured deployments, services, persistent storage, and ingress routing to support real-time messaging and scalability.",
    github: "https://github.com/Krishna7031/full-stack-chat-app"
  },

  {
    id: "django-kind",
    title: "Django on Kubernetes (Kind)",
    summary: "Django application deployed on a local Kubernetes cluster.",
    stack: ["Django", "Kubernetes", "NGINX"],
    impact: "Strengthened Kubernetes networking and ingress troubleshooting skills.",
    description:
      "Containerized and deployed a Django Notes application using Kind. Configured deployments, services, persistent volumes, jobs, cron jobs, and ingress routing, and debugged real-world service exposure issues.",
    github: "https://github.com/Krishna7031/django-notes-app"
  },

  {
    id: "k8s-monitoring",
    title: "Kubernetes Monitoring Stack",
    summary: "Cluster monitoring using Prometheus and Grafana.",
    stack: ["Prometheus", "Grafana", "Kubernetes"],
    impact: "Enabled real-time observability and system health tracking.",
    description:
      "Deployed Prometheus and Grafana on Kubernetes to monitor pods, containers, and services. Configured dashboards and metrics collection to observe cluster health and performance.",
    github: "https://github.com/Krishna7031/k8s-voting-app"
  },

  {
    id: "aws-vpc-ha",
    title: "Highly Available AWS VPC",
    summary: "Fault-tolerant AWS VPC with ALB and Auto Scaling.",
    stack: ["Amazon VPC", "ALB", "Auto Scaling"],
    impact: "Delivered resilient and highly available cloud networking.",
    description:
      "Designed and deployed a secure AWS VPC with public and private subnets, NAT Gateway, Application Load Balancer, and Auto Scaling Groups. Validated fault tolerance and traffic distribution under partial failures.",
    github: "https://github.com/Krishna7031/aws-vpc-autoscaling-lb"
  },

  {
    id: "docker-django",
    title: "Dockerized Django App",
    summary: "Full-stack Django application deployed using Docker.",
    stack: ["Docker", "NGINX", "MySQL"],
    impact: "Improved deployment consistency through containerization.",
    description:
      "Deployed a Django To-Do application using Docker containers for the application, reverse proxy, and database layers. Used Docker Compose for orchestration, persistent volumes for data storage, and custom networks for service communication.",
    github: "https://github.com/Krishna7031"
  },

  {
    id: "docker-expense",
    title: "Docker Expense Tracker",
    summary: "Expense tracking application deployed on AWS EC2 using Docker.",
    stack: ["Docker", "AWS EC2", "MySQL"],
    impact: "Enabled portable and cloud-ready application deployment.",
    description:
      "Containerized an expense tracker application and deployed it on AWS EC2. Managed multi-container orchestration using Docker Compose, configured security groups, and ensured persistent storage and reliable networking.",
    github: "https://github.com/Krishna7031/expense-tracker-web-app"
  }
];
