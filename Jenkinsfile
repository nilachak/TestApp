pipeline{  
  agent any
  
    tools {nodejs "node"}
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
