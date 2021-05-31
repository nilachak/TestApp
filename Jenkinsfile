pipeline{  
  agent any
  
    tools {nodejs "nodejs"}
    stages {
        stage('Build'){
           steps{
              script{
                sh 'npm install'
              } 
           }   
         }      
  }
}
