#Etapes pour les branch

1. **On créé une branche depuis "master" et on switch dans le même temps**

        git checkout -b {Le-nom-de-ta-branche}
        
Tu bosses sur ta branche (connexion par exemple), une fois que tu as finis de travailler sur cette branche

2. **On add + push la branche**

        git add .
        git commit -m ""
        git push origin {Le-nom-de-ta-branche}


Ensuite sur Github: Create new Pull request. Une fois validé et merger sur github, revenir sur ton VSCode sur ta machine :

3. **Revenir à la branche master**

        git checkout master

4. **Mettre à jour le repo entre son git et github**

        git pull
