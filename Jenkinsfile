pipeline {
    agent {
        docker {
            image 'node14.17.6-slim-chrome100-ff99-edge'
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