pipeline{  
  agent any 
  environment {
    cluster_zone = 'asia-southeast1-c'
    cluster_name = credentials('cluster_name');
    project_id = credentials('project_id');
    repo_name = 'testapp'
  }
  tools {nodejs "nodejs"}  
    stages {
        stage('Build'){
           steps{
              script{
                sh 'npm install'
              } 
           }   
         }
        stage('Test and Generate Coverage'){
           when {
             branch 'develop'
           }
           steps{
              script{
                sh 'npm run coverage'
              } 
           }   
         }
                                                           
  }
}
