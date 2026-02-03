const projects = [
  {
    id: "generalscaler",
    title: "GeneralScaler Operator",
    hero: true,
    summary: "Production-grade Kubernetes operator for universal, policy-driven autoscaling.",
    stack: ["Kubernetes", "Helm", "Python", "GitHub Actions"],
    description: `
Designed and implemented a production-grade Kubernetes operator enabling safe, policy-driven autoscaling
for any Deployment. Built custom CRDs with pluggable metric sources (Prometheus, Redis, Pub/Sub),
implemented SLO-aware and cost-aware scaling, and added safety mechanisms like cooldowns and rate limits.
Packaged via Helm with full CI/CD automation.
    `,
    github: "https://github.com/Krishna7031/generalscaler-operator"
  },
  {
    id: "secure-cicd",
    title: "Secure CI/CD Pipeline",
    hero: true,
    summary: "Enterprise CI/CD pipeline with security gates and automated deployment.",
    stack: ["Jenkins", "Docker", "SonarQube", "Trivy", "AWS EC2"],
    description: `
Built a multi-stage CI/CD pipeline integrating Jenkins, SonarQube, Trivy, and Docker.
Enforced quality gates, blocked vulnerable builds, and achieved sub-5-minute secure deployments.
    `,
    github: "https://github.com/Krishna7031/jenkins-automated-cicd-pipeline"
  },
  {
    id: "ebs-cost-optimizer",
    title: "AWS EBS Snapshot Cost Optimizer",
    summary: "Serverless automation eliminating orphaned EBS snapshots.",
    stack: ["AWS Lambda", "Python", "CloudWatch", "IAM"],
    description: `
Built Lambda automation to detect and safely delete stale EBS snapshots.
Reduced storage cost while maintaining strict safety validation.
    `,
    github: "https://github.com/Krishna7031/aws-ebs-snapshot-cost-optimizer"
  },
  {
    id: "github-jira",
    title: "GitHub–Jira Automation",
    summary: "Event-driven GitHub to Jira issue automation.",
    stack: ["Python", "Flask", "GitHub Webhooks", "AWS EC2"],
    description: `
Integrated GitHub events with Jira using Flask-based webhook handlers.
Implemented secure credential handling and production debugging.
    `,
    github: "https://github.com/Krishna7031/github-jira-integration-using-python-flask"
  },
  {
    id: "serverless-task-tracker",
    title: "Serverless Task Tracker",
    summary: "Full-stack serverless AWS application with Cognito auth.",
    stack: ["Lambda", "API Gateway", "DynamoDB", "Cognito"],
    description: `
Designed a fully serverless AWS application with secure JWT-based authentication.
Frontend on S3 + CloudFront, backend on Lambda and API Gateway.
    `,
    github: "https://github.com/Krishna7031/serverless-task-tracker-app-deployment"
  },
  {
    id: "eks-gitops-retail",
    title: "EKS GitOps Retail App",
    summary: "GitOps-driven microservices deployment on EKS.",
    stack: ["EKS", "Terraform", "ArgoCD", "GitHub Actions"],
    description: `
Provisioned EKS via Terraform and deployed microservices using GitOps workflows with ArgoCD.
    `,
    github: "https://github.com/Krishna7031/retail-store-app"
  },
  {
    id: "terraform-eks",
    title: "Terraform EKS Automation",
    summary: "Fully automated AWS EKS cluster provisioning.",
    stack: ["Terraform", "EKS", "AWS Networking"],
    description: `
Provisioned scalable EKS clusters with managed node groups and optimized networking.
    `,
    github: "https://github.com/Krishna7031/terraform-eks"
  },
  {
    id: "ansible-ec2",
    title: "Ansible EC2 Automation",
    summary: "Automated EC2 configuration using Ansible playbooks.",
    stack: ["Ansible", "Linux", "Nginx", "AWS EC2"],
    description: `
Built Ansible-driven provisioning and configuration workflows eliminating manual SSH.
    `,
    github: "https://github.com/Krishna7031/ansible-playbook-ec2"
  },
  {
    id: "terraform-remote-state",
    title: "Terraform Remote State & Modules",
    summary: "Production Terraform workflows with remote state.",
    stack: ["Terraform", "S3", "DynamoDB"],
    description: `
Designed modular Terraform infrastructure with workspaces and state locking.
    `,
    github: "https://github.com/Krishna7031/terraform-module-remotestate-workspace"
  },
  {
    id: "terraform-nginx",
    title: "Terraform EC2 with NGINX",
    summary: "Automated EC2 provisioning with NGINX setup.",
    stack: ["Terraform", "Shell", "NGINX"],
    description: `
Provisioned EC2 and automated NGINX installation using Terraform user-data scripts.
    `,
    github: "https://github.com/Krishna7031/terraform-module-remotestate-workspace"
  },
  {
    id: "k8s-chat-app",
    title: "Kubernetes Chat Application",
    summary: "Multi-tier chat app deployed on Kubernetes.",
    stack: ["Kubernetes", "YAML", "MongoDB"],
    description: `
Deployed a full-stack chat application on Kubernetes with persistent storage and ingress.
    `,
    github: "https://github.com/Krishna7031/full-stack-chat-app"
  },
  {
    id: "django-kind",
    title: "Django on Kubernetes (Kind)",
    summary: "Django app deployed on local Kubernetes cluster.",
    stack: ["Django", "Kubernetes", "NGINX"],
    description: `
Containerized and deployed Django app with persistent storage and ingress routing.
    `,
    github: "https://github.com/Krishna7031/django-notes-app"
  },
  {
    id: "k8s-monitoring",
    title: "Kubernetes Monitoring Stack",
    summary: "Prometheus & Grafana monitoring on Kubernetes.",
    stack: ["Prometheus", "Grafana", "Kubernetes"],
    description: `
Implemented cluster monitoring with Prometheus and Grafana dashboards.
    `,
    github: "https://github.com/Krishna7031/k8s-voting-app"
  },
  {
    id: "aws-vpc-ha",
    title: "Highly Available AWS VPC",
    summary: "Fault-tolerant AWS VPC with ALB and Auto Scaling.",
    stack: ["AWS VPC", "ALB", "Auto Scaling"],
    description: `
Designed secure VPC architecture with private subnets, NAT, ALB, and ASG.
    `,
    github: "https://github.com/Krishna7031/aws-vpc-autoscaling-lb"
  },
  {
    id: "docker-django",
    title: "Dockerized Django App",
    summary: "Full-stack Django app with Docker & NGINX.",
    stack: ["Docker", "NGINX", "MySQL"],
    description: `
Containerized Django application with multi-container orchestration.
    `,
    github: "https://github.com/Krishna7031"
  },
  {
    id: "docker-expense",
    title: "Docker Expense Tracker",
    summary: "Expense tracker deployed on AWS EC2 using Docker.",
    stack: ["Docker", "AWS EC2", "MySQL"],
    description: `
Deployed a Dockerized expense tracking app with persistent storage.
    `,
    github: "https://github.com/Krishna7031/expense-tracker-web-app"
  }
];
