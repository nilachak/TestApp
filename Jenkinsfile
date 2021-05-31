pipeline{  
  agent any
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
