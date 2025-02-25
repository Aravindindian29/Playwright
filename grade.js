function studentScore(score){
let grade;
switch(true){
    case (score <= 100 && score > 80):
    grade = 'A';
    break;

    case (score <= 80 && score > 50):
    grade = 'B';
    break;

    case (score <= 50 && score > 40):
    grade = 'C';
    break;

    case (score <= 40 && score > 30):
    grade = 'D';
    break;

    case (score <= 30):
    grade = 'U';
    break;

    default:
     grade = 'Invalid score'; 
    }
    return grade;
}
let stundentGrade =studentScore(80);
console.log(stundentGrade);
