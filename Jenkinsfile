pipeline {
    agent {
        docker {
            image 'lebowski25kurt/webdriverio:latest'
            args '-p 3000:3000'
        }
    }

    stages {
        stage('build') {
            steps {
                echo 'Build process'
                sh 'git clone https://github.com/coffewithmi1k/HomeWorkWebUniversity.git'
                dir('HomeWorkWebUniversity') {
                    sh 'npm i'
                }
            }
        }

         stage('test') {
            steps {
                dir('HomeWorkWebUniversity') {
                    echo 'Testing process'
                                sh 'npm run cy:run'
                            }
            }
        }
    }
}