# CEAS Tribunal General Meeting Sign In
This web form will allow students to sign in to general meetings for [CEAS Tribunal](https://tribunal.uc.edu), an engineering student council organization at the University of Cincinnati, using their student ID cards. The cards will be scanned using an NFC reader. 

## Use Case
### General Flow
When a student has not signed in using this form before, it will prompt the student to enter their information such as their name and email. Then, we will prompt the student to scan their card to store all of the information together in a database table. The next time the student scans their ID, the database will query for their information and will sign them in and store that in a separate database table. An admin page will be created for the secretary of the organization to sign in and to convert the student sign-in data into a CSV. Then, the secretary can delete the day's data from the database table once the data has been converted. 

### Data Flow
A database table will be designated to store information of all students who have signed in including the student's name, email, and the scanned ID code. Another table will store information about students who have signed into each meeting and that information will include the student's name, email, and the date of the meeting. 
