export const AboutTextJava =`public static void main(String[] args) {
    
    //Initialize new engineer
    EngineerDev guillaume = new EngineerDev("Guillaume", "ELAMBERT");


    /*-----------------------------------------*/
    /*            SET ENGINEER DATA            */
    /*-----------------------------------------*/

    guillaume.setDateOfBirth("03/25/2000");

    string[] address = {
        "8 bis rue de Saint Benoît",
        "78610",
        "Auffargis",
        "FRANCE"
    };
    guillaume.setAddress(adress);

    string[][] studies = {
        { "Scientific Baccalaureate", "2015-2018", "Louis Bascan high school, Rambouillet" },
        { "BTEC Higher National Diploma in Computer Science" , "2018-2020", "Benjamin Franklin high school, Orléans"},
        { "Master’s Degree in Engineering", "2020-now", "Polytech, Tours" } 
    };
    guillaume.setStudies(studies);

    guillaume.setWork("Analyst / Developer and Engineering Student");

    string[] hobbies = {
        "Sports (especially handball)",
        guillaume.getWork()
    };
    guillaume.setHobbies(hobbies);
}`;


export const AboutTextTxt = `Hi,

My name is Guillaume ELAMBERT I'm 20 years old and I have just become an engineering student
in polytech Tours.

I graduated from a BTEC Higher National Diploma in Computer Science in 2020 and I decided 
to deepen my knowledge by becoming an engineer.`;

export default AboutTextJava;