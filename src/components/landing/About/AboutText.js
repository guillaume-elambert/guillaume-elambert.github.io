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
}
`;


export const AboutTextTxt = `Hi,

My name is Guillaume ELAMBERT I am 22 years old and I am currently enrolled in an engineering degree at Polytech Tours.

I graduated from a BTEC Higher National Diploma in Computer Science in 2020 and I decided to deepen my knowledge by becoming an engineer.

During my engineering degree, I have done many projects (which you can find below), most of them in groups.
These projects allowed me to acquire many skills and knowledge about computer science in general but also about team work and group cohesion.

I'm passionate about what I do and I always try to improve so I'm open to any discussion, debate or tips on computer science (new technologies, ethics, good usages, ...).

For my last year of studies, I would like to realize my project abroad, so please feel free to contact me !


PS : I'm not the best at creating fronts, I hope it doesn't sting your eyes too much...
`;

export default AboutTextJava;