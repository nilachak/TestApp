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
        stage('Test and Generate Coverage'){
           steps{
              script{
                sh 'npm run coverage'
              } 
           }   
         }       
  }
}
