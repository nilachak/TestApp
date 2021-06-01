pipeline{  
  agent any
  triggers {
    cron('*/5 * * * *')
  }  
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
           steps{
              script{
                sh 'npm run coverage'
              } 
           }   
         }
        stage('gcloud Authentication'){
           steps{
              script{
               withCredentials([file(credentialsId: 'sa_file', variable: 'GC_KEY')]) {
                sh('gcloud auth activate-service-account --key-file=${GC_KEY}')            
               }
              } 
           }   
         }
        stage('Enable docker Auth'){
           steps{
              script{
               sh('gcloud --quiet auth configure-docker')              
              } 
           }   
         }       
        stage('Build docker Image Build and tag image'){
           steps{
              script{
                 sh('docker build . --tag gcr.io/${project_id}/${repo_name}:$BUILD_NUMBER')
              } 
           }   
         } 
       stage('Push image to GCR'){
           steps{
              script{
                 sh('docker push gcr.io/${project_id}/${repo_name}:$BUILD_NUMBER')
              } 
           }   
         }
       stage('Deploy to GKE Cluster'){
           steps{
              script{
                 sh('gcloud container clusters get-credentials ${cluster_name} --zone ${cluster_zone} --project ${project_id}')
                 sh('helm upgrade --install testapp ./helm/testapp --set image.repository=gcr.io/${project_id}/${repo_name} --set image.tag=$BUILD_NUMBER')
              } 
           }   
         }                                                           
  }
}
