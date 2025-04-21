import festivals from './hindu.png'
import culture  from './indian-woman.png'
import food  from './food1.jpg'
import heritage  from './heritagesite.jpg'
import history  from './Indianhistory1.jpg'





const quiz_data = [
{
    "topic": "Festivals of India",
    "image": festivals,
    "description": "Test your knowledge about India's famous festivals and their significance.",
    "questionsCount": 10,
    "timeLimit": "5 min",
    "questions":
[
  {
    question: "Which festival celebrates the birth of Lord Krishna?",
    options: ["Diwali", "Janmashtami", "Ram Navami", "Holi"],
    answer: "Janmashtami",
  },
  {
    question:
      "During which festival is the 'Chhau' dance performed in Jharkhand and Odisha?",
    options: ["Durga Puja", "Holi", "Diwali", "Navratri"],
    answer: "Durga Puja",
  },
  {
    question:
      "Which harvest festival is celebrated with the traditional 'Bihu' dance?",
    options: ["Onam", "Baisakhi", "Lohri", "Bihu"],
    answer: "Bihu",
  },
  {
    question:
      "What is the main festival of Kerala, celebrated with boat races and floral decorations?",
    options: ["Pongal", "Onam", "Vishu", "Thrissur Pooram"],
    answer: "Onam",
  },
  {
    question:
      "Which Indian festival celebrates the victory of Goddess Durga over Mahishasura?",
    options: ["Durga Puja", "Diwali", "Navratri", "Dussehra"],
    answer: "Durga Puja",
  },
  {
    question:
      "Which festival is celebrated by lighting oil lamps and decorating homes with rangoli?",
    options: ["Diwali", "Holi", "Onam", "Pongal"],
    answer: "Diwali",
  },
  {
    question:
      "During which festival do Sikhs commemorate the formation of the Khalsa?",
    options: ["Baisakhi", "Lohri", "Guru Nanak Jayanti", "Maghi"],
    answer: "Baisakhi",
  },
  {
    question: "The festival of 'Hornbill' is celebrated in which Indian state?",
    options: ["Nagaland", "Assam", "Mizoram", "Meghalaya"],
    answer: "Nagaland",
  },
  {
    question:
      "Which festival in Tamil Nadu marks the beginning of the Tamil New Year?",
    options: ["Pongal", "Vishu", "Thai Poosam", "Aadi Perukku"],
    answer: "Pongal",
  },
  {
    question: "During which festival is the 'Gudi' hoisted in Maharashtra?",
    options: ["Baisakhi", "Gudi Padwa", "Navratri", "Diwali"],
    answer: "Gudi Padwa",
  },
  {
    question:
      "What is the primary religious significance of 'Guru Nanak Jayanti'?",
    options: [
      "Birth of Guru Nanak",
      "Martyrdom of Guru Arjan",
      "Formation of the Khalsa",
      "Diwali for Sikhs",
    ],
    answer: "Birth of Guru Nanak",
  },
  {
    question: "The festival of 'Kumbh Mela' is celebrated how frequently?",
    options: [
      "Every 6 years",
      "Every 8 years",
      "Every 12 years",
      "Every 4 years",
    ],
    answer: "Every 12 years",
  },
  {
    question:
      "Which festival is known for the grand chariot procession in Puri, Odisha?",
    options: ["Rath Yatra", "Diwali", "Janmashtami", "Dussehra"],
    answer: "Rath Yatra",
  },
  {
    question:
      "The 'Baisakhi' festival is celebrated to mark which historical event?",
    options: [
      "Formation of the Khalsa",
      "Harvest season",
      "New Year",
      "Guru Gobind Singh's birthday",
    ],
    answer: "Formation of the Khalsa",
  },
  {
    question:
      "During which festival do people throw colored powders and water at each other?",
    options: ["Diwali", "Holi", "Lohri", "Navratri"],
    answer: "Holi",
  },
  {
    question:
      "Which festival is celebrated by lighting bonfires and dancing around them?",
    options: ["Lohri", "Baisakhi", "Holi", "Diwali"],
    answer: "Lohri",
  },
  {
    question: "The festival of 'Guru Purab' is celebrated by which community?",
    options: ["Sikhs", "Jains", "Buddhists", "Hindus"],
    answer: "Sikhs",
  },
  {
    question: "The 'Chapchar Kut' festival is celebrated by which tribe?",
    options: ["Mizo", "Naga", "Bodo", "Santhal"],
    answer: "Mizo",
  },
  {
    question: "Which festival involves making and flying kites in Gujarat?",
    options: ["Makar Sankranti", "Diwali", "Navratri", "Holi"],
    answer: "Makar Sankranti",
  },
  {
    question:
      "Which festival marks the victory of good over evil and is celebrated with fireworks?",
    options: ["Diwali", "Holi", "Navratri", "Makar Sankranti"],
    answer: "Diwali",
  },
  {
    question:
      "Which festival in India celebrates the marriage of Lord Shiva and Goddess Parvati?",
    options: ["Maha Shivratri", "Navratri", "Diwali", "Vasant Panchami"],
    answer: "Maha Shivratri",
  },
  {
    question: "Which festival celebrates the harvest season in Punjab?",
    options: ["Lohri", "Baisakhi", "Holi", "Makar Sankranti"],
    answer: "Baisakhi",
  },
  {
    question: "During which festival is the 'Dahi Handi' event popular?",
    options: ["Janmashtami", "Holi", "Ganesh Chaturthi", "Diwali"],
    answer: "Janmashtami",
  },
  {
    question: "Which festival is celebrated with boat races in Kerala?",
    options: ["Onam", "Vishu", "Pongal", "Thrissur Pooram"],
    answer: "Onam",
  },
  {
    question:
      "Which festival in Karnataka celebrates the grandeur of Mysore Palace?",
    options: ["Dasara", "Deepavali", "Ugadi", "Vishu"],
    answer: "Dasara",
  },
  {
    question:
      "During which festival do women in Maharashtra observe a fast for the long life of their husbands?",
    options: ["Karva Chauth", "Vat Purnima", "Navratri", "Makar Sankranti"],
    answer: "Vat Purnima",
  },
  {
    question:
      "Which festival in India is also known as the 'Festival of Lights'?",
    options: ["Diwali", "Holi", "Pongal", "Navratri"],
    answer: "Diwali",
  },
  {
    question:
      "Which festival in India celebrates the bond between brothers and sisters?",
    options: ["Raksha Bandhan", "Bhai Dooj", "Diwali", "Holi"],
    answer: "Raksha Bandhan",
  },
  {
    question:
      "Which festival marks the end of Ramadan and is celebrated with prayers and feasting?",
    options: ["Eid-ul-Fitr", "Bakrid", "Muharram", "Shab-e-Barat"],
    answer: "Eid-ul-Fitr",
  },
  {
    question:
      "The festival of 'Chhath Puja' is primarily celebrated in which Indian states?",
    options: [
      "Bihar and Uttar Pradesh",
      "Punjab and Haryana",
      "Maharashtra and Gujarat",
      "Tamil Nadu and Kerala",
    ],
    answer: "Bihar and Uttar Pradesh",
  },
  {
    question:
      "Which festival is celebrated by lighting sky lanterns in Rajasthan?",
    options: ["Diwali", "Gangaur", "Teej", "Makar Sankranti"],
    answer: "Makar Sankranti",
  },
  {
    question:
      "During which festival is the 'Ganga Aarti' held on the ghats of Varanasi?",
    options: ["Diwali", "Dev Deepawali", "Navratri", "Dussehra"],
    answer: "Dev Deepawali",
  },
  {
    question: "Which Indian festival marks the Sikh New Year?",
    options: ["Baisakhi", "Lohri", "Guru Purab", "Maghi"],
    answer: "Baisakhi",
  },
  {
    question: "What is the main sweet dish prepared during Ganesh Chaturthi?",
    options: ["Modak", "Ladoo", "Peda", "Barfi"],
    answer: "Modak",
  },
  {
    question: "The festival of 'Vishu' is celebrated in which Indian state?",
    options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
    answer: "Kerala",
  },
  {
    question: "Which festival celebrates the birth of Lord Rama?",
    options: ["Ram Navami", "Diwali", "Navratri", "Dussehra"],
    answer: "Ram Navami",
  },
  {
    question:
      "Which festival is celebrated with the famous 'Garba' and 'Dandiya Raas' dances?",
    options: ["Navratri", "Holi", "Baisakhi", "Diwali"],
    answer: "Navratri",
  },
  {
    question: "Which festival is known as the 'festival of harvest' in Punjab?",
    options: ["Lohri", "Baisakhi", "Diwali", "Holi"],
    answer: "Lohri",
  },
  {
    question: "The festival of 'Pongal' is dedicated to which deity?",
    options: ["Sun God", "Lord Vishnu", "Lord Shiva", "Goddess Lakshmi"],
    answer: "Sun God",
  },
  {
    question:
      "During which festival do people exchange gifts and sweets in India?",
    options: ["Diwali", "Holi", "Raksha Bandhan", "Baisakhi"],
    answer: "Diwali",
  },
  {
    question:
      "Which festival celebrates the worship of the Sun God and is popular in Bihar?",
    options: ["Chhath Puja", "Makar Sankranti", "Pongal", "Vishu"],
    answer: "Chhath Puja",
  },
  {
    question: "The festival of 'Thrissur Pooram' is famous for its?",
    options: [
      "Elephant procession",
      "Boat race",
      "Fireworks display",
      "Flower carpet",
    ],
    answer: "Elephant procession",
  },
  {
    question:
      "Which festival is associated with the famous 'Pushkar Camel Fair'?",
    options: ["Diwali", "Kartika Purnima", "Holi", "Dussehra"],
    answer: "Kartika Purnima",
  },
  {
    question:
      "Which festival is celebrated by lighting 1,000 oil lamps at the Golden Temple?",
    options: ["Guru Nanak Jayanti", "Baisakhi", "Diwali", "Maghi"],
    answer: "Diwali",
  },
  {
    question:
      "During which festival are the 'Kavad Yatris' seen carrying water from the Ganges?",
    options: ["Shravan Month", "Makar Sankranti", "Navratri", "Maha Shivratri"],
    answer: "Shravan Month",
  },
  {
    question: "The festival of 'Bihu' is celebrated by which community?",
    options: ["Assamese", "Bengali", "Punjabi", "Gujarati"],
    answer: "Assamese",
  },
  {
    question:
      "Which festival in Karnataka celebrates the grandeur of Mysore Palace?",
    options: ["Dasara", "Deepavali", "Ugadi", "Vishu"],
    answer: "Dasara",
  },
  {
    question:
      "During which festival do women in Maharashtra observe a fast for the long life of their husbands?",
    options: ["Karva Chauth", "Vat Purnima", "Navratri", "Makar Sankranti"],
    answer: "Vat Purnima",
  },
  {
    question:
      "Which festival in India is also known as the 'Festival of Lights'?",
    options: ["Diwali", "Holi", "Pongal", "Navratri"],
    answer: "Diwali",
  },
  {
    question: "The festival of 'Gangaur' is dedicated to which goddess?",
    options: ["Gauri", "Lakshmi", "Durga", "Parvati"],
    answer: "Gauri",
  },
  {
    question:
      "Which festival is celebrated with the famous 'Camel Festival' in Rajasthan?",
    options: ["Pushkar Mela", "Desert Festival", "Teej", "Diwali"],
    answer: "Pushkar Mela",
  },
  {
    question:
      "Which festival is celebrated with the 'Ganga Sagar Mela' in West Bengal?",
    options: ["Makar Sankranti", "Durga Puja", "Holi", "Navratri"],
    answer: "Makar Sankranti",
  },
  {
    question: "Which festival involves the 'Bonalu' ritual in Telangana?",
    options: ["Bathukamma", "Diwali", "Dasara", "Bonalu"],
    answer: "Bonalu",
  },
  {
    question: "During which festival is the 'Kumbh Mela' held?",
    options: [
      "Every 12 years",
      "Every 6 years",
      "Every 4 years",
      "Every 3 years",
    ],
    answer: "Every 12 years",
  },
  {
    question:
      "Which festival is associated with the worship of Goddess Lakshmi?",
    options: ["Diwali", "Navratri", "Durga Puja", "Janmashtami"],
    answer: "Diwali",
  },
  {
    question: "The festival of 'Losar' is celebrated by which community?",
    options: [
      "Ladakhi Buddhists",
      "Tibetan Buddhists",
      "Nepali Hindus",
      "Assamese Muslims",
    ],
    answer: "Ladakhi Buddhists",
  },
  {
    question: "Which festival is famous for 'Jallikattu' in Tamil Nadu?",
    options: ["Pongal", "Diwali", "Navratri", "Aadi Perukku"],
    answer: "Pongal",
  },
  {
    question:
      "Which festival is marked by 'Kathakali' dance performances in Kerala?",
    options: ["Onam", "Thrissur Pooram", "Vishu", "Diwali"],
    answer: "Onam",
  },
  {
    question:
      "Which festival in India celebrates the marriage of Lord Shiva and Goddess Parvati?",
    options: ["Maha Shivratri", "Navratri", "Diwali", "Vasant Panchami"],
    answer: "Maha Shivratri",
  },
  {
    question:
      "During which festival is the 'Phoolwalon Ki Sair' celebrated in Delhi?",
    options: ["Diwali", "Navratri", "Eid-ul-Fitr", "Post-Monsoon Season"],
    answer: "Post-Monsoon Season",
  },
  {
    question: "Which festival marks the end of the Pitrupaksha period?",
    options: ["Navratri", "Dussehra", "Mahalaya Amavasya", "Diwali"],
    answer: "Mahalaya Amavasya",
  },
  {
    question:
      "What is the main deity worshipped during the 'Chaitra Navratri'?",
    options: ["Durga", "Vishnu", "Shiva", "Ganesha"],
    answer: "Durga",
  },
  {
    question:
      "Which festival is celebrated with the 'Puli Kali' tiger dance in Kerala?",
    options: ["Onam", "Vishu", "Thrissur Pooram", "Pongal"],
    answer: "Onam",
  },
  {
    question:
      "Which festival is celebrated with the lighting of 1,000 lamps at the Meenakshi Temple in Madurai?",
    options: ["Diwali", "Karthigai Deepam", "Navratri", "Pongal"],
    answer: "Karthigai Deepam",
  },
  {
    question:
      "The festival of 'Ganga Dussehra' celebrates the descent of which river to Earth?",
    options: ["Yamuna", "Godavari", "Ganga", "Krishna"],
    answer: "Ganga",
  },
  {
    question:
      "During which festival is the famous 'Kullu Dussehra' celebrated?",
    options: ["Diwali", "Navratri", "Dussehra", "Lohri"],
    answer: "Dussehra",
  },
  {
    question:
      "Which festival is celebrated in Ladakh to mark the Tibetan New Year?",
    options: ["Hemis Festival", "Losar", "Saga Dawa", "Saka Dawa"],
    answer: "Losar",
  },
  {
    question: "During which festival are 'Bihu' songs performed?",
    options: ["Lohri", "Onam", "Baisakhi", "Bihu"],
    answer: "Bihu",
  },
  {
    question: "Which festival is known as the 'Festival of Kites'?",
    options: ["Makar Sankranti", "Diwali", "Navratri", "Holi"],
    answer: "Makar Sankranti",
  },
  {
    question:
      "Which festival is famous for the 'Kottiyoor Vysakha Mahotsavam'?",
    options: ["Onam", "Vishu", "Thrissur Pooram", "Kottiyoor Festival"],
    answer: "Kottiyoor Festival",
  },
  {
    question: "The festival of 'Buddha Purnima' commemorates what event?",
    options: [
      "Birth of Buddha",
      "Enlightenment of Buddha",
      "Death of Buddha",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Which festival is celebrated with the famous 'Palkhi Procession' in Maharashtra?",
    options: ["Ganesh Chaturthi", "Pandharpur Wari", "Diwali", "Navratri"],
    answer: "Pandharpur Wari",
  },
  {
    question:
      "Which festival in Rajasthan is famous for its desert fair and camel races?",
    options: ["Pushkar Mela", "Gangaur", "Teej", "Nagaur Fair"],
    answer: "Pushkar Mela",
  },
  {
    question:
      "The 'Tulsi Vivah' festival symbolizes the marriage of which deities?",
    options: [
      "Tulsi and Vishnu",
      "Lakshmi and Narayan",
      "Radha and Krishna",
      "Parvati and Shiva",
    ],
    answer: "Tulsi and Vishnu",
  },
  {
    question:
      "During which festival is the 'Ganga Aarti' performed with grandeur in Varanasi?",
    options: ["Dev Deepawali", "Makar Sankranti", "Navratri", "Diwali"],
    answer: "Dev Deepawali",
  },
  {
    question:
      "Which festival in Tamil Nadu involves a massive chariot procession?",
    options: [
      "Pongal",
      "Rath Yatra",
      "Arubathimoovar Festival",
      "Bharani Utsavam",
    ],
    answer: "Arubathimoovar Festival",
  },
  {
    question: "The festival of 'Nag Panchami' is dedicated to the worship of?",
    options: ["Serpents", "Cows", "Lord Shiva", "Sun God"],
    answer: "Serpents",
  },
  {
    question:
      "Which festival celebrates the return of Lord Rama to Ayodhya after defeating Ravana?",
    options: ["Dussehra", "Diwali", "Ram Navami", "Navratri"],
    answer: "Diwali",
  },
  {
    question:
      "Which festival is celebrated with 'Ram Leela' performances across India?",
    options: ["Navratri", "Dussehra", "Diwali", "Baisakhi"],
    answer: "Dussehra",
  },
  {
    question: "Which festival involves the famous 'Boat Race' in Kerala?",
    options: ["Onam", "Vishu", "Pongal", "Thrissur Pooram"],
    answer: "Onam",
  },
  {
    question:
      "Which festival is associated with the famous 'Sonepur Cattle Fair' in Bihar?",
    options: ["Chhath Puja", "Kartik Purnima", "Diwali", "Makar Sankranti"],
    answer: "Kartik Purnima",
  },
  {
    question:
      "Which festival celebrates the bond between sisters and brothers, similar to Raksha Bandhan?",
    options: ["Bhai Dooj", "Karva Chauth", "Teej", "Vat Purnima"],
    answer: "Bhai Dooj",
  },
  {
    question:
      "Which festival in Maharashtra is known for grand Ganapati processions?",
    options: ["Ganesh Chaturthi", "Diwali", "Navratri", "Holi"],
    answer: "Ganesh Chaturthi",
  },
  {
    question:
      "During which festival is the 'Chariot Festival' held at the Jagannath Temple in Puri?",
    options: ["Rath Yatra", "Navratri", "Diwali", "Baisakhi"],
    answer: "Rath Yatra",
  },
  {
    question: "Which festival marks the harvest season in Tamil Nadu?",
    options: ["Pongal", "Onam", "Vishu", "Navratri"],
    answer: "Pongal",
  },
  {
    question:
      "The festival of 'Gangaur' is celebrated in honor of which goddess?",
    options: ["Parvati", "Lakshmi", "Durga", "Ganga"],
    answer: "Parvati",
  },
  {
    question: "Which festival marks the Sikh New Year?",
    options: ["Baisakhi", "Lohri", "Guru Purab", "Maghi"],
    answer: "Baisakhi",
  },
  {
    question:
      "During which festival is the 'Baul Music Festival' celebrated in West Bengal?",
    options: ["Holi", "Diwali", "Poush Mela", "Rath Yatra"],
    answer: "Poush Mela",
  },
  {
    question: "Which festival celebrates the legend of Prahlad and Holika?",
    options: ["Holi", "Diwali", "Navratri", "Makar Sankranti"],
    answer: "Holi",
  },
  {
    question: "During which festival is the 'Bihu Dance' performed in Assam?",
    options: ["Bihu", "Pongal", "Navratri", "Lohri"],
    answer: "Bihu",
  },
  {
    question:
      "Which festival is known as the 'Festival of Golden Harvest' in Punjab?",
    options: ["Baisakhi", "Lohri", "Navratri", "Diwali"],
    answer: "Baisakhi",
  },
  {
    question: "During which festival is the 'Sonepur Mela' held in Bihar?",
    options: ["Kartik Purnima", "Chhath Puja", "Diwali", "Holi"],
    answer: "Kartik Purnima",
  },
  {
    question:
      "Which festival is celebrated with 'Ram Leela' enactments across India?",
    options: ["Dussehra", "Diwali", "Navratri", "Janmashtami"],
    answer: "Dussehra",
  },
  {
    question:
      "During which festival is the 'Chapchar Kut' celebrated in Mizoram?",
    options: ["Christmas", "Chapchar Kut", "Hornbill Festival", "Losar"],
    answer: "Chapchar Kut",
  },
  {
    question:
      "Which festival in Tamil Nadu is marked by Jallikattu, the bull-taming sport?",
    options: ["Pongal", "Onam", "Navratri", "Vishu"],
    answer: "Pongal",
  },
  {
    question: "The festival of 'Thrissur Pooram' is famous for which activity?",
    options: ["Elephant Procession", "Boat Race", "Fireworks", "Dance Parade"],
    answer: "Elephant Procession",
  },
  {
    question:
      "Which festival is celebrated by lighting lamps in the Kartik month?",
    options: ["Dev Deepawali", "Diwali", "Navratri", "Dussehra"],
    answer: "Dev Deepawali",
  },
  {
    question:
      "Which festival marks the Sikh Guru Gobind Singh’s birth anniversary?",
    options: ["Guru Purab", "Baisakhi", "Maghi", "Guru Gobind Singh Jayanti"],
    answer: "Guru Gobind Singh Jayanti",
  },
  {
    question:
      "During which festival is the 'Pushkar Camel Fair' held in Rajasthan?",
    options: ["Diwali", "Teej", "Pushkar Mela", "Gangaur"],
    answer: "Pushkar Mela",
  },
  {
    question: "The festival of 'Bathukamma' is celebrated in which state?",
    options: ["Telangana", "Karnataka", "Kerala", "Tamil Nadu"],
    answer: "Telangana",
  },
  {
    question: "Which festival is associated with the Jagannath Rath Yatra?",
    options: ["Puri Rath Yatra", "Navratri", "Dussehra", "Diwali"],
    answer: "Puri Rath Yatra",
  },
  {
    question:
      "During which festival is the 'Hornbill Festival' celebrated in Nagaland?",
    options: ["Lohri", "Hornbill Festival", "Dussehra", "Bihu"],
    answer: "Hornbill Festival",
  },
  {
    question:
      "Which festival celebrates the marriage of Tulsi plant with Lord Vishnu?",
    options: ["Tulsi Vivah", "Diwali", "Navratri", "Ram Navami"],
    answer: "Tulsi Vivah",
  },
  {
    question:
      "Which festival is known as the 'Festival of Lights' in North India?",
    options: ["Diwali", "Holi", "Navratri", "Baisakhi"],
    answer: "Diwali",
  },
  {
    question: "The 'Sindhu Darshan Festival' is celebrated along which river?",
    options: ["Ganga", "Yamuna", "Indus", "Brahmaputra"],
    answer: "Indus",
  },
  {
    question:
      "Which festival involves the worship of nine forms of Goddess Durga?",
    options: ["Navratri", "Durga Puja", "Dussehra", "Diwali"],
    answer: "Navratri",
  },
  {
    question:
      "During which festival do women perform 'Garba' and 'Dandiya Raas'?",
    options: ["Navratri", "Diwali", "Baisakhi", "Holi"],
    answer: "Navratri",
  },
  {
    question:
      "Which festival is celebrated with the traditional 'Lavani' dance in Maharashtra?",
    options: ["Diwali", "Gudi Padwa", "Baisakhi", "Holi"],
    answer: "Gudi Padwa",
  },
  {
    question:
      "The 'Kumbh Mela' is held once every how many years at the same location?",
    options: ["12 years", "4 years", "6 years", "8 years"],
    answer: "12 years",
  },
  {
    question: "Which festival marks the start of the Tamil New Year?",
    options: ["Pongal", "Vishu", "Ugadi", "Thai Pusam"],
    answer: "Pongal",
  },
  {
    question:
      "During which festival is the 'Baul Music Festival' celebrated in West Bengal?",
    options: ["Durga Puja", "Poush Mela", "Basant Panchami", "Holi"],
    answer: "Poush Mela",
  },
  {
    question: "Which festival is celebrated with the lighting of sky lanterns?",
    options: ["Diwali", "Makar Sankranti", "Navratri", "Vishu"],
    answer: "Makar Sankranti",
  },
  {
    question: "Which festival involves the famous 'Boat Race' in Kerala?",
    options: ["Onam", "Vishu", "Pongal", "Thrissur Pooram"],
    answer: "Onam",
  },
  {
    question:
      "The festival of 'Karva Chauth' is celebrated by married women for what purpose?",
    options: ["Husband's long life", "Wealth", "Health", "Prosperity"],
    answer: "Husband's long life",
  },
  {
    question:
      "Which festival is celebrated with 'Kolam' decorations in Tamil Nadu?",
    options: ["Pongal", "Navratri", "Diwali", "Vishu"],
    answer: "Pongal",
  },
  {
    question:
      "During which festival is the 'Ram Barat' procession held in Uttar Pradesh?",
    options: ["Dussehra", "Navratri", "Ram Navami", "Diwali"],
    answer: "Ram Navami",
  },
  {
    question:
      "Which festival is celebrated with the 'Chhau Dance' in Jharkhand and Odisha?",
    options: ["Durga Puja", "Navratri", "Baisakhi", "Diwali"],
    answer: "Durga Puja",
  },
  {
    question:
      "Which festival is famous for its grand 'Fire Dance' in Rajasthan?",
    options: ["Holi", "Diwali", "Gangaur", "Pushkar Mela"],
    answer: "Pushkar Mela",
  },
  {
    question: "Which festival marks the worship of Lord Ganesha for ten days?",
    options: ["Ganesh Chaturthi", "Navratri", "Diwali", "Dussehra"],
    answer: "Ganesh Chaturthi",
  },
  {
    question:
      "Which festival is celebrated by offering 'Pind Daan' in Gaya, Bihar?",
    options: ["Pitru Paksha", "Navratri", "Diwali", "Raksha Bandhan"],
    answer: "Pitru Paksha",
  },
  {
    question:
      "Which festival is famous for the grand snake boat race in Kerala?",
    options: ["Onam", "Vishu", "Thrissur Pooram", "Pongal"],
    answer: "Onam",
  },
  {
    question:
      "During which festival is the 'Jallikattu' bull-taming sport held?",
    options: ["Pongal", "Diwali", "Navratri", "Baisakhi"],
    answer: "Pongal",
  },
  {
    question:
      "Which festival marks the Sikh celebration of the harvest season?",
    options: ["Baisakhi", "Lohri", "Maghi", "Guru Purab"],
    answer: "Baisakhi",
  },
  {
    question: "During which festival is the 'Chhath Puja' celebrated in Bihar?",
    options: ["Chhath Puja", "Diwali", "Navratri", "Makar Sankranti"],
    answer: "Chhath Puja",
  },
  {
    question: "Which festival marks the start of the Bengali New Year?",
    options: ["Poila Boishakh", "Durga Puja", "Navratri", "Kali Puja"],
    answer: "Poila Boishakh",
  },
  {
    question:
      "Which festival involves the worship of Sun God by married women?",
    options: ["Chhath Puja", "Karva Chauth", "Baisakhi", "Makar Sankranti"],
    answer: "Chhath Puja",
  },
  {
    question: "During which festival is the 'Shigmo Parade' celebrated in Goa?",
    options: ["Shigmo", "Diwali", "Holi", "Ganesh Chaturthi"],
    answer: "Shigmo",
  },
  {
    question: "Which festival in Punjab is marked by the lighting of bonfires?",
    options: ["Lohri", "Baisakhi", "Diwali", "Navratri"],
    answer: "Lohri",
  },
  {
    question: "Which festival celebrates the coronation of Lord Rama?",
    options: ["Diwali", "Ram Navami", "Dussehra", "Navratri"],
    answer: "Diwali",
  },
  {
    question:
      "During which festival do women observe fasts for their husband's long life?",
    options: ["Karva Chauth", "Teej", "Vasant Panchami", "Vat Purnima"],
    answer: "Karva Chauth",
  },
  {
    question: "Which festival celebrates the birth of Lord Krishna?",
    options: ["Janmashtami", "Ram Navami", "Diwali", "Navratri"],
    answer: "Janmashtami",
  },
  {
    question:
      "Which festival is famous for the 'Dahi Handi' celebration in Maharashtra?",
    options: ["Janmashtami", "Ganesh Chaturthi", "Navratri", "Holi"],
    answer: "Janmashtami",
  },
  {
    question: "During which festival is the 'Kumbh Mela' celebrated?",
    options: [
      "Every 12 years",
      "Every 4 years",
      "Every 6 years",
      "Every 8 years",
    ],
    answer: "Every 12 years",
  },
  {
    question:
      "Which festival in Rajasthan is known for the traditional 'Teej Procession'?",
    options: ["Teej", "Gangaur", "Navratri", "Diwali"],
    answer: "Teej",
  },
  {
    question:
      "During which festival is the 'Hemis Festival' celebrated in Ladakh?",
    options: ["Hemis Festival", "Losar", "Baisakhi", "Maghi"],
    answer: "Hemis Festival",
  },
  {
    question:
      "Which festival is associated with the worship of Lord Vishwakarma?",
    options: ["Vishwakarma Puja", "Diwali", "Navratri", "Dussehra"],
    answer: "Vishwakarma Puja",
  },
  {
    question: "During which festival is the 'Bihu Dance' performed in Assam?",
    options: ["Bihu", "Holi", "Navratri", "Lohri"],
    answer: "Bihu",
  },
  {
    question:
      "Which festival is marked by the lighting of lamps in the Kartik month?",
    options: ["Dev Deepawali", "Diwali", "Navratri", "Dussehra"],
    answer: "Dev Deepawali",
  },
  {
    question:
      "During which festival is the 'Baisakhi Mela' celebrated in Punjab?",
    options: ["Baisakhi", "Lohri", "Diwali", "Navratri"],
    answer: "Baisakhi",
  },
  {
    question:
      "Which festival celebrates the bond between brothers and sisters?",
    options: ["Raksha Bandhan", "Bhai Dooj", "Diwali", "Karva Chauth"],
    answer: "Raksha Bandhan",
  },
  {
    question: "Which festival is celebrated by offering 'Sevaiyan' sweets?",
    options: ["Eid-ul-Fitr", "Diwali", "Navratri", "Baisakhi"],
    answer: "Eid-ul-Fitr",
  },
  {
    question:
      "During which festival is the 'Puli Kali' dance performed in Kerala?",
    options: ["Onam", "Thrissur Pooram", "Pongal", "Vishu"],
    answer: "Onam",
  },
  {
    question: "Which festival marks the Sikh Guru Nanak’s birth anniversary?",
    options: ["Guru Purab", "Baisakhi", "Maghi", "Lohri"],
    answer: "Guru Purab",
  },
  {
    question:
      "During which festival is the 'Khajuraho Dance Festival' celebrated?",
    options: ["Khajuraho Festival", "Navratri", "Diwali", "Baisakhi"],
    answer: "Khajuraho Festival",
  },
  {
    question:
      "Which festival in Gujarat is celebrated with garba and dandiya raas?",
    options: ["Navratri", "Diwali", "Holi", "Baisakhi"],
    answer: "Navratri",
  },
  {
    question:
      "Which festival involves the lighting of Akash Kandil (sky lanterns)?",
    options: ["Diwali", "Makar Sankranti", "Navratri", "Pongal"],
    answer: "Diwali",
  },
  {
    question:
      "Which festival is celebrated with 'Kolam' decorations in Tamil Nadu?",
    options: ["Pongal", "Navratri", "Diwali", "Vishu"],
    answer: "Pongal",
  },
  {
    question: "Which festival marks the worship of Lord Ganesha?",
    options: ["Ganesh Chaturthi", "Navratri", "Diwali", "Dussehra"],
    answer: "Ganesh Chaturthi",
  },
  {
    question: "Which festival in Odisha is famous for its 'Chhau Dance'?",
    options: ["Durga Puja", "Baisakhi", "Navratri", "Diwali"],
    answer: "Durga Puja",
  },
  {
    question: "During which festival is the 'Baul Music Festival' celebrated?",
    options: ["Poush Mela", "Durga Puja", "Diwali", "Baisakhi"],
    answer: "Poush Mela",
  },
]
},
{
    "topic": "Indian History",
    "image": history,
    "description": "Explore India's rich historical past with this quiz on major events and personalities.",
    "questionsCount": 10,
    "timeLimit": "12 min",
    "questions":
    [
      {
        question:
          "Who was the last Hindu king to rule over Delhi before the establishment of the Delhi Sultanate?",
        options: [
          "Raja Jayachandra",
          "Prithviraj Chauhan",
          "Vikramaditya",
          "Harsha Vardhana",
        ],
        answer: "Prithviraj Chauhan",
      },
      {
        question:
          "Which ancient Hindu text is considered the oldest and forms the foundation of Vedic literature?",
        options: ["Bhagavad Gita", "Upanishads", "Rigveda", "Ramayana"],
        answer: "Rigveda",
      },
      {
        question: "The 'Bhagavad Gita' is part of which ancient Indian epic?",
        options: ["Ramayana", "Mahabharata", "Vedas", "Puranas"],
        answer: "Mahabharata",
      },
      {
        question:
          "Which Hindu king is known for building the famous Sun Temple at Konark?",
        options: [
          "Raja Raja Chola",
          "Narasimha Deva I",
          "Krishnadevaraya",
          "Harsha Vardhana",
        ],
        answer: "Narasimha Deva I",
      },
      {
        question:
          "Who was the founder of the Maurya Empire, who embraced Hinduism in his early years?",
        options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        answer: "Chandragupta Maurya",
      },
      {
        question:
          "Which ancient Hindu scholar wrote 'Arthashastra', a treatise on economics and political science?",
        options: ["Patanjali", "Chanakya", "Vatsyayana", "Kalidasa"],
        answer: "Chanakya",
      },
      {
        question:
          "Who was the famous Hindu king who defeated Alexander's general Seleucus I Nicator?",
        options: [
          "Chandragupta Maurya",
          "Samudragupta",
          "Harsha",
          "Prithviraj Chauhan",
        ],
        answer: "Chandragupta Maurya",
      },
      {
        question: "Which kingdom was ruled by King Harsha Vardhana?",
        options: ["Kannauj", "Magadha", "Kalinga", "Chola"],
        answer: "Kannauj",
      },
      {
        question:
          "What is the name of the ancient Hindu legal text written by Sage Manu?",
        options: ["Arthashastra", "Manusmriti", "Rigveda", "Mahabharata"],
        answer: "Manusmriti",
      },
      {
        question:
          "The famous Hindu pilgrimage site 'Rameswaram' is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Rama", "Lord Krishna"],
        answer: "Lord Shiva",
      },
      {
        question: "Which Hindu kingdom built the famous Brihadeeswarar Temple?",
        options: ["Chola", "Gupta", "Maurya", "Pallava"],
        answer: "Chola",
      },
      {
        question: "The sacred Hindu river Ganga originates from which place?",
        options: ["Gangotri", "Yamunotri", "Haridwar", "Rishikesh"],
        answer: "Gangotri",
      },
      {
        question:
          "Which ancient Hindu text discusses yoga, meditation, and spiritual practices?",
        options: [
          "Upanishads",
          "Bhagavad Gita",
          "Yoga Sutras of Patanjali",
          "Puranas",
        ],
        answer: "Yoga Sutras of Patanjali",
      },
      {
        question: "The ancient city of 'Kashi' is now known as?",
        options: ["Varanasi", "Ayodhya", "Mathura", "Ujjain"],
        answer: "Varanasi",
      },
      {
        question:
          "Which Hindu dynasty ruled over most of Southern India during the medieval period?",
        options: ["Chola", "Gupta", "Maurya", "Pallava"],
        answer: "Chola",
      },
      {
        question: "Who is the author of the epic Ramayana?",
        options: ["Valmiki", "Ved Vyasa", "Kalidasa", "Tulsidas"],
        answer: "Valmiki",
      },
      {
        question:
          "The 'Bhakti Movement' was associated with which religious reform in Hinduism?",
        options: [
          "Devotion to God",
          "Ritualistic worship",
          "Caste reforms",
          "Yoga practices",
        ],
        answer: "Devotion to God",
      },
      {
        question: "Which ancient university was a major center of Hindu learning?",
        options: ["Takshashila", "Nalanda", "Vikramashila", "Somapura"],
        answer: "Takshashila",
      },
      {
        question: "Which famous Hindu temple is located in Puri, Odisha?",
        options: [
          "Jagannath Temple",
          "Sun Temple",
          "Brihadeeswarar Temple",
          "Kedarnath Temple",
        ],
        answer: "Jagannath Temple",
      },
      {
        question:
          "Which Hindu scripture contains the teachings of Lord Krishna to Arjuna?",
        options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Vedas"],
        answer: "Bhagavad Gita",
      },
      {
        question:
          "The festival of 'Onam' is celebrated in honor of which Hindu deity?",
        options: ["Lord Vishnu", "Lord Shiva", "Lord Krishna", "Lord Ganesha"],
        answer: "Lord Vishnu",
      },
      {
        question:
          "Which sacred Hindu scripture is considered the essence of the Upanishads?",
        options: ["Bhagavad Gita", "Rigveda", "Ramayana", "Arthashastra"],
        answer: "Bhagavad Gita",
      },
      {
        question:
          "The 'Shiva Tandava Stotra' is attributed to which Hindu demon king?",
        options: ["Ravana", "Bali", "Hiranyakashyap", "Vibhishana"],
        answer: "Ravana",
      },
      {
        question: "Which river is considered the holiest in Hinduism?",
        options: ["Ganga", "Yamuna", "Godavari", "Narmada"],
        answer: "Ganga",
      },
      {
        question: "Who was the founder of the Rashtrakuta dynasty?",
        options: ["Dantidurga", "Krishna I", "Amoghavarsha", "Pulakeshin II"],
        answer: "Dantidurga",
      },
      {
        question:
          "The sacred Hindu pilgrimage site 'Kedarnath' is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Rama", "Lord Ganesha"],
        answer: "Lord Shiva",
      },
      {
        question:
          "Who was the Hindu king known for his conquests and religious tolerance in South India?",
        options: [
          "Krishnadevaraya",
          "Raja Raja Chola",
          "Rajendra Chola",
          "Harsha Vardhana",
        ],
        answer: "Krishnadevaraya",
      },
      {
        question:
          "The 'Bhakti movement' led to the emergence of which popular form of Hindu worship?",
        options: [
          "Temple worship",
          "Devotional singing",
          "Ritual sacrifices",
          "Yoga practices",
        ],
        answer: "Devotional singing",
      },
      {
        question:
          "Which ancient Hindu kingdom ruled over most of present-day Karnataka?",
        options: ["Chalukya", "Hoysala", "Kadamba", "Rashtrakuta"],
        answer: "Chalukya",
      },
      {
        question:
          "The 'Kumbh Mela' is celebrated once every how many years at a particular location?",
        options: ["12 years", "4 years", "6 years", "8 years"],
        answer: "12 years",
      },
      {
        question: "Who wrote the 'Yoga Sutras', a key text in Hindu philosophy?",
        options: ["Patanjali", "Vyasa", "Kalidasa", "Chanakya"],
        answer: "Patanjali",
      },
      {
        question:
          "The ancient kingdom of Magadha was ruled by which powerful Hindu dynasty?",
        options: ["Maurya", "Nanda", "Gupta", "Chola"],
        answer: "Maurya",
      },
      {
        question:
          "Which Hindu king established the famous 'Vijayanagara Empire' in South India?",
        options: [
          "Harihara I",
          "Krishnadevaraya",
          "Raja Raja Chola",
          "Rajendra Chola",
        ],
        answer: "Harihara I",
      },
      {
        question: "Which Hindu text is known as the 'Fifth Veda'?",
        options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Brahmanas"],
        answer: "Mahabharata",
      },
      {
        question:
          "Which dynasty constructed the famous Khajuraho Temples in Madhya Pradesh?",
        options: ["Chandela", "Pallava", "Maurya", "Chola"],
        answer: "Chandela",
      },
      {
        question:
          "Who was the famous Hindu philosopher who founded the Advaita Vedanta philosophy?",
        options: [
          "Adi Shankaracharya",
          "Ramanuja",
          "Madhvacharya",
          "Vallabhacharya",
        ],
        answer: "Adi Shankaracharya",
      },
      {
        question:
          "Which Hindu festival commemorates the return of Lord Rama to Ayodhya after 14 years of exile?",
        options: ["Diwali", "Ram Navami", "Dussehra", "Navratri"],
        answer: "Diwali",
      },
      {
        question:
          "The 'Garba' dance performed during Navratri is traditionally associated with which Hindu goddess?",
        options: ["Durga", "Lakshmi", "Saraswati", "Kali"],
        answer: "Durga",
      },
      {
        question:
          "Which ancient Hindu text describes the concept of Dharma, Artha, Kama, and Moksha?",
        options: ["Manusmriti", "Bhagavad Gita", "Mahabharata", "Vedas"],
        answer: "Manusmriti",
      },
      {
        question:
          "The 'Amarnath Yatra' in Jammu and Kashmir is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Rama", "Goddess Durga"],
        answer: "Lord Shiva",
      },
      {
        question:
          "Which ancient Hindu king is known for his promotion of Sanskrit literature and art?",
        options: [
          "Harsha Vardhana",
          "Krishnadevaraya",
          "Raja Raja Chola",
          "Chandragupta II",
        ],
        answer: "Harsha Vardhana",
      },
      {
        question:
          "The ancient city of 'Hastinapur' was the capital of which kingdom?",
        options: ["Kuru Kingdom", "Magadha", "Kosala", "Panchala"],
        answer: "Kuru Kingdom",
      },
      {
        question:
          "Which Hindu king famously defeated Muhammad Ghori in the First Battle of Tarain?",
        options: [
          "Prithviraj Chauhan",
          "Raja Jayachandra",
          "Vikramaditya",
          "Harsha",
        ],
        answer: "Prithviraj Chauhan",
      },
      {
        question:
          "The 'Ashtanga Yoga' system, described in Hindu texts, consists of how many limbs?",
        options: ["8", "6", "4", "12"],
        answer: "8",
      },
      {
        question: "Which ancient Hindu text describes the concept of 'Karma Yoga'?",
        options: ["Bhagavad Gita", "Ramayana", "Upanishads", "Arthashastra"],
        answer: "Bhagavad Gita",
      },
      {
        question:
          "The ancient Hindu epic 'Ramayana' consists of how many Kandas (books)?",
        options: ["7", "5", "9", "4"],
        answer: "7",
      },
      {
        question:
          "The 'Ratha Yatra' festival in Puri is dedicated to which Hindu deity?",
        options: ["Lord Jagannath", "Lord Shiva", "Lord Rama", "Lord Krishna"],
        answer: "Lord Jagannath",
      },
      {
        question:
          "Which Hindu temple is known as the 'Golden Temple of South India'?",
        options: [
          "Padmanabhaswamy Temple",
          "Venkateswara Temple",
          "Meenakshi Temple",
          "Brihadeeswarar Temple",
        ],
        answer: "Venkateswara Temple",
      },
      {
        question: "The 'Dwarka' city is associated with which Hindu deity?",
        options: ["Lord Krishna", "Lord Vishnu", "Lord Shiva", "Lord Rama"],
        answer: "Lord Krishna",
      },
      {
        question: "Which ancient Hindu text is also known as the 'Song of God'?",
        options: ["Bhagavad Gita", "Upanishads", "Vedas", "Ramayana"],
        answer: "Bhagavad Gita",
      },
      {
        question: "Which river is mentioned most frequently in the Rigveda?",
        options: ["Saraswati", "Ganga", "Yamuna", "Sindhu"],
        answer: "Saraswati",
      },
      {
        question:
          "Which ancient Hindu text contains hymns dedicated to fire, wind, and sun?",
        options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
        answer: "Rigveda",
      },
      {
        question: "The 'Kashi Vishwanath Temple' is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Rama", "Lord Krishna", "Goddess Durga"],
        answer: "Lord Shiva",
      },
      {
        question:
          "Which Hindu temple in Tamil Nadu is famous for its massive gopuram (gateway tower)?",
        options: [
          "Meenakshi Temple",
          "Brihadeeswarar Temple",
          "Rameshwaram Temple",
          "Kanchipuram Temple",
        ],
        answer: "Meenakshi Temple",
      },
      {
        question:
          "Which dynasty was known for building the famous temples of Khajuraho?",
        options: ["Chandela", "Maurya", "Chola", "Pallava"],
        answer: "Chandela",
      },
      {
        question:
          "The 'Nataraja' form of Lord Shiva represents which cosmic concept?",
        options: [
          "Dance of creation and destruction",
          "Meditation",
          "Protection of devotees",
          "Granting boons",
        ],
        answer: "Dance of creation and destruction",
      },
      {
        question:
          "The festival of 'Durga Puja' celebrates the victory of Goddess Durga over which demon?",
        options: ["Mahishasura", "Ravana", "Shumbha", "Kumbhakarna"],
        answer: "Mahishasura",
      },
      {
        question: "Which Hindu sage composed the Yoga Sutras?",
        options: ["Patanjali", "Vyasa", "Valmiki", "Bhartrhari"],
        answer: "Patanjali",
      },
      {
        question: "Which Hindu goddess is considered the consort of Lord Vishnu?",
        options: ["Lakshmi", "Saraswati", "Parvati", "Kali"],
        answer: "Lakshmi",
      },
      {
        question: "Which festival celebrates the birth of Lord Ganesha?",
        options: ["Ganesh Chaturthi", "Diwali", "Navratri", "Janmashtami"],
        answer: "Ganesh Chaturthi",
      },
      {
        question:
          "Which ancient Hindu king expanded the Chola Empire into Southeast Asia?",
        options: ["Raja Raja Chola I", "Krishnadevaraya", "Ashoka", "Samudragupta"],
        answer: "Raja Raja Chola I",
      },
      {
        question:
          "The 'Panchatantra' stories are attributed to which ancient Hindu scholar?",
        options: ["Vishnu Sharma", "Patanjali", "Kalidasa", "Chanakya"],
        answer: "Vishnu Sharma",
      },
      {
        question: "Which river is considered the most sacred in Hinduism?",
        options: ["Ganga", "Yamuna", "Godavari", "Kaveri"],
        answer: "Ganga",
      },
      {
        question: "The 'Upanishads' are part of which category of Hindu texts?",
        options: ["Vedas", "Puranas", "Itihasas", "Tantras"],
        answer: "Vedas",
      },
      {
        question:
          "Who was the founder of the Chola dynasty, which played a significant role in South Indian history?",
        options: [
          "Vijayalaya Chola",
          "Raja Raja Chola I",
          "Rajendra Chola I",
          "Krishnadevaraya",
        ],
        answer: "Vijayalaya Chola",
      },
      {
        question:
          "Which Hindu temple in Tamil Nadu is renowned for its massive Shiva lingam and Dravidian architecture?",
        options: [
          "Brihadeeswarar Temple",
          "Meenakshi Temple",
          "Rameshwaram Temple",
          "Kailasanathar Temple",
        ],
        answer: "Brihadeeswarar Temple",
      },
      {
        question:
          "Which ancient Hindu text is considered a conversation between King Janaka and Sage Yajnavalkya?",
        options: [
          "Brihadaranyaka Upanishad",
          "Rigveda",
          "Bhagavad Gita",
          "Manusmriti",
        ],
        answer: "Brihadaranyaka Upanishad",
      },
      {
        question:
          "Which king established the Pala dynasty, known for promoting Hinduism and Buddhism?",
        options: ["Gopala", "Dharmapala", "Devapala", "Vijayapala"],
        answer: "Gopala",
      },
      {
        question:
          "The 'Chalukya dynasty' is known for constructing which famous Hindu temple?",
        options: [
          "Virupaksha Temple",
          "Somnath Temple",
          "Jagannath Temple",
          "Sun Temple",
        ],
        answer: "Virupaksha Temple",
      },
      {
        question: "Which famous Indian scholar wrote 'Abhijnanasakuntalam'?",
        options: ["Kalidasa", "Vishnu Sharma", "Chanakya", "Bharavi"],
        answer: "Kalidasa",
      },
      {
        question:
          "Who was the famous Hindu king of the Kakatiya dynasty, known for his resistance against the Delhi Sultanate?",
        options: [
          "Prataparudra II",
          "Rudramadevi",
          "Ganapati Deva",
          "Krishna Deva Raya",
        ],
        answer: "Prataparudra II",
      },
      {
        question: "Which Hindu philosopher founded the Dvaita school of Vedanta?",
        options: [
          "Madhvacharya",
          "Adi Shankaracharya",
          "Ramanuja",
          "Vallabhacharya",
        ],
        answer: "Madhvacharya",
      },
      {
        question:
          "The 'Kumbh Mela' is celebrated at how many different locations in India?",
        options: ["4", "3", "5", "6"],
        answer: "4",
      },
      {
        question:
          "Which Vedic text contains hymns dedicated to various deities, including Indra and Agni?",
        options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
        answer: "Rigveda",
      },
      {
        question: "Which ancient Hindu kingdom had its capital at 'Ujjain'?",
        options: ["Avanti", "Magadha", "Kosala", "Panchala"],
        answer: "Avanti",
      },
      {
        question:
          "Who was the famous Hindu king known for his patronage of Jainism in Karnataka?",
        options: [
          "Raja Bhoja",
          "Amoghavarsha I",
          "Krishnadevaraya",
          "Harsha Vardhana",
        ],
        answer: "Amoghavarsha I",
      },
      {
        question: "Which Hindu text contains the concept of 'Purushartha'?",
        options: ["Manusmriti", "Bhagavad Gita", "Vedas", "Upanishads"],
        answer: "Manusmriti",
      },
      {
        question:
          "The 'Tanjore Brihadeeswarar Temple' was built by which Chola king?",
        options: [
          "Raja Raja Chola I",
          "Rajendra Chola I",
          "Vijayalaya Chola",
          "Krishnadevaraya",
        ],
        answer: "Raja Raja Chola I",
      },
      {
        question:
          "Which Hindu festival is celebrated to mark the birth of Lord Krishna?",
        options: ["Janmashtami", "Diwali", "Navratri", "Rama Navami"],
        answer: "Janmashtami",
      },
      {
        question:
          "Which river is considered the daughter of Surya according to Hindu mythology?",
        options: ["Yamuna", "Saraswati", "Godavari", "Kaveri"],
        answer: "Yamuna",
      },
      {
        question: "Who was the Hindu king who fought against Alexander the Great?",
        options: ["Porus", "Chandragupta Maurya", "Bindusara", "Ashoka"],
        answer: "Porus",
      },
      {
        question:
          "Which Hindu temple in Gujarat was repeatedly plundered by Mahmud of Ghazni?",
        options: [
          "Somnath Temple",
          "Dwarkadhish Temple",
          "Akshardham Temple",
          "Sun Temple",
        ],
        answer: "Somnath Temple",
      },
      {
        question:
          "Which ancient Hindu text describes the laws of governance and justice?",
        options: ["Manusmriti", "Arthashastra", "Bhagavad Gita", "Rigveda"],
        answer: "Arthashastra",
      },
      {
        question:
          "The famous 'Venkateswara Temple' is located in which Indian state?",
        options: ["Andhra Pradesh", "Tamil Nadu", "Karnataka", "Kerala"],
        answer: "Andhra Pradesh",
      },
      {
        question:
          "Which Hindu text contains the teachings of Lord Rama to his sons?",
        options: ["Ramayana", "Yoga Vasistha", "Bhagavad Gita", "Upanishads"],
        answer: "Yoga Vasistha",
      },
      {
        question:
          "Who was the last Hindu ruler of Kashmir before the advent of Muslim rule?",
        options: ["Queen Didda", "Harsha", "Lalitaditya", "Jayapida"],
        answer: "Queen Didda",
      },
      {
        question: "Which Hindu sage composed the 'Ashtavakra Gita'?",
        options: ["Ashtavakra", "Valmiki", "Vyasa", "Patanjali"],
        answer: "Ashtavakra",
      },
      {
        question: "Which Hindu dynasty ruled over most of present-day Maharashtra?",
        options: ["Rashtrakuta", "Chola", "Maurya", "Pallava"],
        answer: "Rashtrakuta",
      },
      {
        question:
          "Which ancient Hindu city is referred to as 'Indraprastha' in the Mahabharata?",
        options: ["Delhi", "Kurukshetra", "Mathura", "Ayodhya"],
        answer: "Delhi",
      },
      {
        question: "Who wrote the famous Hindu text 'Yoga Vasistha'?",
        options: ["Valmiki", "Vasistha", "Vyasa", "Patanjali"],
        answer: "Valmiki",
      },
      {
        question: "The 'Sun Temple' at Modhera was built by which dynasty?",
        options: ["Solanki", "Chola", "Maurya", "Gupta"],
        answer: "Solanki",
      },
      {
        question:
          "Which Hindu king defeated Muhammad Ghori in the First Battle of Tarain?",
        options: [
          "Prithviraj Chauhan",
          "Raja Jayachandra",
          "Harsha",
          "Bappa Rawal",
        ],
        answer: "Prithviraj Chauhan",
      },
      {
        question: "Which Hindu festival marks the end of the harvest season?",
        options: ["Makar Sankranti", "Onam", "Pongal", "Bihu"],
        answer: "Makar Sankranti",
      },
      {
        question: "The 'Brihadeeswarar Temple' is located in which city?",
        options: ["Thanjavur", "Madurai", "Chennai", "Rameswaram"],
        answer: "Thanjavur",
      },
      {
        question: "Who was the author of 'Raghuvamsa'?",
        options: ["Kalidasa", "Chanakya", "Valmiki", "Bharavi"],
        answer: "Kalidasa",
      },
      {
        question:
          "Who was the founder of the Gupta Empire, which marked the golden age of Hindu culture?",
        options: [
          "Chandragupta I",
          "Samudragupta",
          "Chandragupta II",
          "Kumaragupta",
        ],
        answer: "Chandragupta I",
      },
      {
        question:
          "Which Hindu temple is known for its 56 musical pillars that produce musical notes when struck?",
        options: [
          "Vittala Temple",
          "Meenakshi Temple",
          "Brihadeeswarar Temple",
          "Jagannath Temple",
        ],
        answer: "Vittala Temple",
      },
      {
        question:
          "The ancient Hindu kingdom of 'Magadha' was located in which present-day Indian state?",
        options: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Jharkhand"],
        answer: "Bihar",
      },
      {
        question:
          "Which Hindu philosopher is associated with the Vishishtadvaita (qualified non-dualism) philosophy?",
        options: [
          "Ramanuja",
          "Adi Shankaracharya",
          "Madhvacharya",
          "Vallabhacharya",
        ],
        answer: "Ramanuja",
      },
      {
        question:
          "Which Hindu deity is known as 'Harihara', a combination of Vishnu and Shiva?",
        options: ["Shankarnarayana", "Nataraja", "Jagannath", "Dattatreya"],
        answer: "Shankarnarayana",
      },
      {
        question:
          "The 'Lingayat' sect, a reformist Hindu movement, was founded by which saint?",
        options: ["Basava", "Ramanuja", "Madhvacharya", "Chaitanya Mahaprabhu"],
        answer: "Basava",
      },
      {
        question: "Which ancient Hindu king was known as the 'Napoleon of India'?",
        options: [
          "Samudragupta",
          "Chandragupta Maurya",
          "Harsha Vardhana",
          "Ashoka",
        ],
        answer: "Samudragupta",
      },
      {
        question:
          "The 'Sangam Age' in South Indian history is associated with which kingdom?",
        options: ["Cholas", "Cheras", "Pandyas", "All of the above"],
        answer: "All of the above",
      },
      {
        question:
          "Who composed the 'Arthashastra', an ancient Hindu treatise on statecraft and economics?",
        options: ["Chanakya", "Vishnu Sharma", "Kalidasa", "Patanjali"],
        answer: "Chanakya",
      },
      {
        question:
          "The 'Vimana' style of temple architecture is associated with which region?",
        options: ["South India", "North India", "West India", "East India"],
        answer: "South India",
      },
      {
        question:
          "Which Hindu goddess is known as 'Mahishasuramardini' for slaying the demon Mahishasura?",
        options: ["Durga", "Kali", "Parvati", "Lakshmi"],
        answer: "Durga",
      },
      {
        question:
          "The ancient Hindu text 'Yoga Sutras' contains how many aphorisms (sutras)?",
        options: ["196", "108", "256", "300"],
        answer: "196",
      },
      {
        question: "Which ancient Hindu kingdom had its capital at 'Kanchipuram'?",
        options: ["Pallava", "Chola", "Chera", "Vakataka"],
        answer: "Pallava",
      },
      {
        question:
          "Which Hindu king is known for his extensive coinage and conquests in North India?",
        options: ["Chandragupta II", "Ashoka", "Harsha", "Vikramaditya"],
        answer: "Chandragupta II",
      },
      {
        question:
          "The 'Saptarishi Mandala' in Hindu mythology refers to which group?",
        options: ["Seven sages", "Seven rivers", "Seven planets", "Seven kings"],
        answer: "Seven sages",
      },
      {
        question: "The 'Bhagavad Gita' is a part of which Hindu epic?",
        options: ["Mahabharata", "Ramayana", "Vedas", "Upanishads"],
        answer: "Mahabharata",
      },
      {
        question: "The 'Varaha Avatar' of Lord Vishnu is depicted as which animal?",
        options: ["Boar", "Tortoise", "Fish", "Lion"],
        answer: "Boar",
      },
      {
        question:
          "Which Hindu festival is associated with the worship of the Sun God and takes place in Bihar?",
        options: ["Chhath Puja", "Diwali", "Makar Sankranti", "Pongal"],
        answer: "Chhath Puja",
      },
      {
        question:
          "The 'Garuda Purana' is a Hindu text primarily associated with which topic?",
        options: [
          "Afterlife and funeral rites",
          "Temple construction",
          "Vedic hymns",
          "Astrology",
        ],
        answer: "Afterlife and funeral rites",
      },
      {
        question:
          "Which Hindu king performed the famous 'Ashwamedha Yajna' to assert his sovereignty?",
        options: [
          "Samudragupta",
          "Chandragupta Maurya",
          "Harsha",
          "Raja Raja Chola",
        ],
        answer: "Samudragupta",
      },
      {
        question: "The 'Somnath Temple' in Gujarat is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Krishna", "Goddess Durga"],
        answer: "Lord Shiva",
      },
      {
        question: "Which Hindu saint founded the 'Swaminarayan Sampradaya'?",
        options: [
          "Swaminarayan",
          "Vallabhacharya",
          "Ramanuja",
          "Chaitanya Mahaprabhu",
        ],
        answer: "Swaminarayan",
      },
      {
        question:
          "The 'Tripura Sundari' temple in Tripura is dedicated to which Hindu goddess?",
        options: [
          "Goddess Kali",
          "Goddess Lakshmi",
          "Goddess Durga",
          "Goddess Parvati",
        ],
        answer: "Goddess Kali",
      },
      {
        question:
          "The 'Kumbh Mela' occurs every how many years at the same location?",
        options: ["12 years", "6 years", "4 years", "10 years"],
        answer: "12 years",
      },
      {
        question: "The ancient city of 'Kashi' is now known by which name?",
        options: ["Varanasi", "Ayodhya", "Mathura", "Prayagraj"],
        answer: "Varanasi",
      },
      {
        question: "Which Hindu king is credited with defeating the Huns?",
        options: ["Skandagupta", "Samudragupta", "Vikramaditya", "Chandragupta I"],
        answer: "Skandagupta",
      },
      {
        question: "The 'Ranganathaswamy Temple' is located in which Indian state?",
        options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
        answer: "Tamil Nadu",
      },
      {
        question: "The 'Dakshineswar Kali Temple' is located in which city?",
        options: ["Kolkata", "Varanasi", "Haridwar", "Chennai"],
        answer: "Kolkata",
      },
      {
        question: "The 'Vishnu Purana' is dedicated to which deity?",
        options: ["Lord Vishnu", "Lord Shiva", "Lord Brahma", "Goddess Lakshmi"],
        answer: "Lord Vishnu",
      },
      {
        question: "Which Hindu temple is famous for its annual 'Rath Yatra'?",
        options: [
          "Jagannath Temple",
          "Meenakshi Temple",
          "Somnath Temple",
          "Brihadeeswarar Temple",
        ],
        answer: "Jagannath Temple",
      },
    ]
},
{
    "topic": "Indian Heritage Sites",
    "image": heritage,
    "description": "Discover the architectural wonders and cultural heritage sites of India.",
    "questionsCount": 10,
    "timeLimit": "5 min",
    "questions":
    [
      {
        question:
          "Which Indian heritage site is known for its monolithic rock-cut temples?",
        options: [
          "Ellora Caves",
          "Ajanta Caves",
          "Khajuraho Temples",
          "Sun Temple",
        ],
        answer: "Ellora Caves",
      },
      {
        question:
          "The 'Konark Sun Temple', a UNESCO World Heritage site, is located in which state?",
        options: ["Odisha", "Rajasthan", "Madhya Pradesh", "Gujarat"],
        answer: "Odisha",
      },
      {
        question:
          "Which fort is known as the 'Golden Fort' due to its yellow sandstone walls?",
        options: [
          "Jaisalmer Fort",
          "Chittorgarh Fort",
          "Mehrangarh Fort",
          "Red Fort",
        ],
        answer: "Jaisalmer Fort",
      },
      {
        question:
          "Which ancient city is referred to as the 'City of Temples' and is a UNESCO World Heritage site?",
        options: ["Varanasi", "Bhubaneswar", "Hampi", "Pattadakal"],
        answer: "Hampi",
      },
      {
        question:
          "Which Indian heritage site features the largest stone sundial in the world?",
        options: [
          "Jantar Mantar, Jaipur",
          "Qutub Minar",
          "Victoria Memorial",
          "Golconda Fort",
        ],
        answer: "Jantar Mantar, Jaipur",
      },
      {
        question:
          "The famous 'Sanchi Stupa' was commissioned by which Indian emperor?",
        options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Samudragupta"],
        answer: "Ashoka",
      },
      {
        question:
          "The 'Qutub Minar', a UNESCO World Heritage site, is built in which architectural style?",
        options: ["Indo-Islamic", "Mughal", "Dravidian", "Rajput"],
        answer: "Indo-Islamic",
      },
      {
        question: "Which Indian heritage site is known for its erotic sculptures?",
        options: [
          "Khajuraho Temples",
          "Konark Sun Temple",
          "Ellora Caves",
          "Ajanta Caves",
        ],
        answer: "Khajuraho Temples",
      },
      {
        question:
          "Which of the following is a rock-cut cave temple complex in Maharashtra?",
        options: ["Ajanta Caves", "Sun Temple", "Nalanda", "Brihadeeswarar Temple"],
        answer: "Ajanta Caves",
      },
      {
        question: "Which city is known for its heritage site 'Charminar'?",
        options: ["Hyderabad", "Jaipur", "Delhi", "Lucknow"],
        answer: "Hyderabad",
      },
      {
        question:
          "The 'Golconda Fort', famous for its acoustic system, is located in which state?",
        options: ["Telangana", "Karnataka", "Tamil Nadu", "Rajasthan"],
        answer: "Telangana",
      },
      {
        question:
          "The 'Kaziranga National Park', a World Heritage site, is famous for which animal?",
        options: [
          "One-horned rhinoceros",
          "Royal Bengal tiger",
          "Asian elephant",
          "Indian leopard",
        ],
        answer: "One-horned rhinoceros",
      },
      {
        question: "The 'Taj Mahal' was constructed in which architectural style?",
        options: ["Mughal", "Persian", "Rajput", "Indo-Saracenic"],
        answer: "Mughal",
      },
      {
        question:
          "Which Indian temple complex is known for its Dravidian architecture?",
        options: [
          "Meenakshi Temple",
          "Jagannath Temple",
          "Golden Temple",
          "Rameshwaram Temple",
        ],
        answer: "Meenakshi Temple",
      },
      {
        question: "The 'Victoria Memorial' is located in which Indian city?",
        options: ["Kolkata", "Mumbai", "Delhi", "Chennai"],
        answer: "Kolkata",
      },
      {
        question:
          "Which ancient Indian university, a UNESCO World Heritage site, was located in present-day Bihar?",
        options: ["Nalanda", "Takshashila", "Vikramshila", "Pushpagiri"],
        answer: "Nalanda",
      },
      {
        question: "The 'Great Living Chola Temples' include which famous temple?",
        options: [
          "Brihadeeswarar Temple",
          "Sun Temple",
          "Jagannath Temple",
          "Meenakshi Temple",
        ],
        answer: "Brihadeeswarar Temple",
      },
      {
        question:
          "The 'Rani Ki Vav', a stepwell heritage site, is located in which state?",
        options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Karnataka"],
        answer: "Gujarat",
      },
      {
        question: "The 'Fatehpur Sikri' was built by which Mughal emperor?",
        options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
        answer: "Akbar",
      },
      {
        question:
          "Which Indian national park is a World Heritage site and is famous for Bengal tigers?",
        options: [
          "Sundarbans National Park",
          "Jim Corbett National Park",
          "Ranthambore National Park",
          "Bandipur National Park",
        ],
        answer: "Sundarbans National Park",
      },
      {
        question: "The 'Red Fort' in Delhi was built by which Mughal emperor?",
        options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
        answer: "Shah Jahan",
      },
      {
        question:
          "Which Indian heritage site is known for its rock-cut sculptures of elephants and deities?",
        options: [
          "Elephanta Caves",
          "Ajanta Caves",
          "Konark Sun Temple",
          "Ellora Caves",
        ],
        answer: "Elephanta Caves",
      },
      {
        question:
          "Which Indian fort is famous for its sound and light show depicting historical events?",
        options: [
          "Amber Fort",
          "Mehrangarh Fort",
          "Gwalior Fort",
          "Jaisalmer Fort",
        ],
        answer: "Amber Fort",
      },
      {
        question: "The 'Basilica of Bom Jesus' is located in which Indian state?",
        options: ["Goa", "Kerala", "Karnataka", "Tamil Nadu"],
        answer: "Goa",
      },
      {
        question:
          "The 'Ajanta Caves' are famous for their ancient paintings related to which religion?",
        options: ["Buddhism", "Hinduism", "Jainism", "Zoroastrianism"],
        answer: "Buddhism",
      },
      {
        question:
          "The 'Chola dynasty' is associated with which famous UNESCO site?",
        options: [
          "Brihadeeswarar Temple",
          "Hampi",
          "Ellora Caves",
          "Konark Sun Temple",
        ],
        answer: "Brihadeeswarar Temple",
      },
      {
        question:
          "Which Indian heritage site is located on the banks of the Yamuna River?",
        options: ["Taj Mahal", "Red Fort", "Agra Fort", "Itimad-ud-Daulah's Tomb"],
        answer: "Taj Mahal",
      },
      {
        question: "The 'Qutub Minar' complex also houses which famous iron pillar?",
        options: [
          "Iron Pillar of Delhi",
          "Ashoka Pillar",
          "Kumbha Stambha",
          "Garuda Stambha",
        ],
        answer: "Iron Pillar of Delhi",
      },
      {
        question:
          "Which Indian city is known as the 'Pink City' and has a UNESCO-listed heritage site?",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
        answer: "Jaipur",
      },
      {
        question:
          "Which Indian heritage site is known for its grand Indo-Islamic architecture and houses the tomb of Humayun?",
        options: [
          "Humayun's Tomb",
          "Qutub Minar",
          "Taj Mahal",
          "Safdarjung's Tomb",
        ],
        answer: "Humayun's Tomb",
      },
      {
        question:
          "The 'Rock Shelters of Bhimbetka', a UNESCO World Heritage site, contains paintings from which period?",
        options: ["Paleolithic", "Mesolithic", "Neolithic", "Bronze Age"],
        answer: "Paleolithic",
      },
      {
        question:
          "Which Indian temple complex is known for its fusion of Dravidian and Vijayanagara architecture?",
        options: [
          "Virupaksha Temple",
          "Meenakshi Temple",
          "Kedarnath Temple",
          "Jagannath Temple",
        ],
        answer: "Virupaksha Temple",
      },
      {
        question: "The 'Hampi Ruins' are located in which Indian state?",
        options: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
        answer: "Karnataka",
      },
      {
        question:
          "The 'Chhatrapati Shivaji Maharaj Terminus' (CST) is located in which Indian city?",
        options: ["Mumbai", "Pune", "Delhi", "Bengaluru"],
        answer: "Mumbai",
      },
      {
        question: "The 'Sun Temple at Modhera' is located in which Indian state?",
        options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Odisha"],
        answer: "Gujarat",
      },
      {
        question:
          "Which fort, located in Rajasthan, is known for its intricate mirror work in the 'Sheesh Mahal'?",
        options: [
          "Amber Fort",
          "Chittorgarh Fort",
          "Jaisalmer Fort",
          "Mehrangarh Fort",
        ],
        answer: "Amber Fort",
      },
      {
        question:
          "The 'Mahabodhi Temple Complex' in Bodh Gaya is associated with which religion?",
        options: ["Buddhism", "Hinduism", "Jainism", "Sikhism"],
        answer: "Buddhism",
      },
      {
        question:
          "Which heritage site in India is known for its cave paintings and Buddhist sculptures?",
        options: [
          "Ajanta Caves",
          "Ellora Caves",
          "Elephanta Caves",
          "Badami Caves",
        ],
        answer: "Ajanta Caves",
      },
      {
        question:
          "Which Indian heritage site is famous for the 'Nanda Devi and Valley of Flowers National Parks'?",
        options: ["Uttarakhand", "Himachal Pradesh", "Sikkim", "Jammu and Kashmir"],
        answer: "Uttarakhand",
      },
      {
        question:
          "The 'Rani Ki Vav', a stepwell listed as a UNESCO heritage site, is located near which city?",
        options: ["Patan", "Ahmedabad", "Vadodara", "Surat"],
        answer: "Patan",
      },
      {
        question:
          "The 'Red Fort' in Delhi was constructed using which type of stone?",
        options: ["Red sandstone", "White marble", "Granite", "Limestone"],
        answer: "Red sandstone",
      },
      {
        question:
          "Which Indian heritage site is referred to as the 'Golden Temple'?",
        options: [
          "Harmandir Sahib",
          "Meenakshi Temple",
          "Rameshwaram Temple",
          "Jagannath Temple",
        ],
        answer: "Harmandir Sahib",
      },
      {
        question:
          "The 'Champaner-Pavagadh Archaeological Park' is located in which Indian state?",
        options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
        answer: "Gujarat",
      },
      {
        question:
          "The 'Group of Monuments at Pattadakal' is located in which state?",
        options: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
        answer: "Karnataka",
      },
      {
        question:
          "Which Indian fort is known for its seven massive gates and the victory tower?",
        options: [
          "Chittorgarh Fort",
          "Amber Fort",
          "Jaisalmer Fort",
          "Golconda Fort",
        ],
        answer: "Chittorgarh Fort",
      },
      {
        question: "The 'Kaziranga National Park' is located in which Indian state?",
        options: ["Assam", "West Bengal", "Madhya Pradesh", "Odisha"],
        answer: "Assam",
      },
      {
        question:
          "Which Indian temple complex is famous for its 'Thousand Pillar Hall'?",
        options: [
          "Meenakshi Temple",
          "Brihadeeswarar Temple",
          "Jagannath Temple",
          "Sun Temple",
        ],
        answer: "Meenakshi Temple",
      },
      {
        question:
          "The 'Great Himalayan National Park', a UNESCO heritage site, is located in which state?",
        options: ["Himachal Pradesh", "Uttarakhand", "Jammu and Kashmir", "Sikkim"],
        answer: "Himachal Pradesh",
      },
      {
        question:
          "The 'Ajanta Caves' are famous for their murals depicting stories from which texts?",
        options: ["Jataka tales", "Puranas", "Ramayana", "Mahabharata"],
        answer: "Jataka tales",
      },
      {
        question:
          "The 'Agra Fort' is located near which famous Indian heritage site?",
        options: ["Taj Mahal", "Red Fort", "Fatehpur Sikri", "Qutub Minar"],
        answer: "Taj Mahal",
      },
      {
        question: "Which temple in India is known as the 'Black Pagoda'?",
        options: [
          "Konark Sun Temple",
          "Jagannath Temple",
          "Rameshwaram Temple",
          "Meenakshi Temple",
        ],
        answer: "Konark Sun Temple",
      },
      {
        question: "The 'Brihadeeswarar Temple' is dedicated to which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Krishna", "Goddess Durga"],
        answer: "Lord Shiva",
      },
      {
        question: "Which Indian monument is famous for its 'Buland Darwaza'?",
        options: ["Fatehpur Sikri", "Agra Fort", "Red Fort", "Jama Masjid"],
        answer: "Fatehpur Sikri",
      },
      {
        question: "The 'Lotus Temple' in Delhi belongs to which religion?",
        options: ["Bahá'í Faith", "Hinduism", "Sikhism", "Jainism"],
        answer: "Bahá'í Faith",
      },
      {
        question: "The 'Elephanta Caves' are located near which Indian city?",
        options: ["Mumbai", "Goa", "Pune", "Ahmedabad"],
        answer: "Mumbai",
      },
      {
        question:
          "The 'Tawang Monastery', the largest in India, is located in which state?",
        options: ["Arunachal Pradesh", "Assam", "Sikkim", "Nagaland"],
        answer: "Arunachal Pradesh",
      },
      {
        question: "The 'Charminar' in Hyderabad was built by which ruler?",
        options: ["Quli Qutb Shah", "Aurangzeb", "Akbar", "Jahangir"],
        answer: "Quli Qutb Shah",
      },
      {
        question:
          "Which ancient site is known for the 'Dholavira' ruins from the Indus Valley Civilization?",
        options: ["Gujarat", "Rajasthan", "Punjab", "Haryana"],
        answer: "Gujarat",
      },
      {
        question:
          "Which Indian heritage site is known for its rock-cut architecture and the famous Kailasa Temple?",
        options: [
          "Ellora Caves",
          "Ajanta Caves",
          "Elephanta Caves",
          "Badami Caves",
        ],
        answer: "Ellora Caves",
      },
      {
        question:
          "The 'Gol Gumbaz', famous for its massive dome, is located in which Indian state?",
        options: ["Karnataka", "Maharashtra", "Telangana", "Madhya Pradesh"],
        answer: "Karnataka",
      },
      {
        question:
          "Which Indian fort is known for its water management system and step wells?",
        options: [
          "Ranthambore Fort",
          "Jaisalmer Fort",
          "Chittorgarh Fort",
          "Golconda Fort",
        ],
        answer: "Jaisalmer Fort",
      },
      {
        question:
          "The 'Ratha Temples' at Mahabalipuram were constructed by which dynasty?",
        options: ["Pallava", "Chola", "Cheras", "Pandya"],
        answer: "Pallava",
      },
      {
        question:
          "Which Indian heritage site is known for the 'Buddha Stupa' and monolithic pillars?",
        options: [
          "Sanchi Stupa",
          "Ajanta Caves",
          "Konark Sun Temple",
          "Nalanda University",
        ],
        answer: "Sanchi Stupa",
      },
      {
        question:
          "The 'Taj Mahal' complex includes which of the following structures?",
        options: [
          "Mosque, guest house, and garden",
          "Fort, museum, and mosque",
          "Palace, garden, and temple",
          "Temple, fort, and tomb",
        ],
        answer: "Mosque, guest house, and garden",
      },
      {
        question: "The 'Jantar Mantar' in Jaipur was built by which ruler?",
        options: [
          "Maharaja Jai Singh II",
          "Raja Man Singh",
          "Rana Sanga",
          "Raja Bharmal",
        ],
        answer: "Maharaja Jai Singh II",
      },
      {
        question: "The 'Chola Temples' are located in which Indian state?",
        options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
        answer: "Tamil Nadu",
      },
      {
        question:
          "Which Indian temple is known for its 'Chariot Festival' or 'Rath Yatra'?",
        options: [
          "Jagannath Temple",
          "Meenakshi Temple",
          "Rameshwaram Temple",
          "Brihadeeswarar Temple",
        ],
        answer: "Jagannath Temple",
      },
      {
        question: "The 'Agra Fort' was primarily built using which type of stone?",
        options: ["Red sandstone", "White marble", "Granite", "Black basalt"],
        answer: "Red sandstone",
      },
      {
        question: "The 'Charminar' was built in which year?",
        options: ["1591", "1648", "1565", "1720"],
        answer: "1591",
      },
      {
        question:
          "Which Indian national park is a UNESCO heritage site known for its population of lions?",
        options: [
          "Gir Forest National Park",
          "Sundarbans National Park",
          "Jim Corbett National Park",
          "Kaziranga National Park",
        ],
        answer: "Gir Forest National Park",
      },
      {
        question: "The 'Amber Fort' is located near which city?",
        options: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
        answer: "Jaipur",
      },
      {
        question:
          "The 'Ellora Caves' contain temples dedicated to which religions?",
        options: [
          "Hinduism, Buddhism, Jainism",
          "Hinduism, Sikhism, Islam",
          "Buddhism, Christianity, Hinduism",
          "Hinduism, Islam, Jainism",
        ],
        answer: "Hinduism, Buddhism, Jainism",
      },
      {
        question:
          "Which Indian city is known as the 'City of Palaces' and features a heritage-listed palace?",
        options: ["Mysore", "Jaipur", "Udaipur", "Hyderabad"],
        answer: "Mysore",
      },
      {
        question:
          "The 'Great Himalayan National Park' is located in which Indian state?",
        options: ["Himachal Pradesh", "Uttarakhand", "Jammu and Kashmir", "Sikkim"],
        answer: "Himachal Pradesh",
      },
      {
        question:
          "The 'Champaner-Pavagadh Archaeological Park' features remnants of which period?",
        options: [
          "Prehistoric to 16th century",
          "Medieval to modern",
          "Indus Valley to Gupta period",
          "Mauryan to Chola period",
        ],
        answer: "Prehistoric to 16th century",
      },
      {
        question: "Which UNESCO-listed Indian temple is dedicated to the Sun God?",
        options: [
          "Konark Sun Temple",
          "Somnath Temple",
          "Brihadeeswarar Temple",
          "Jagannath Temple",
        ],
        answer: "Konark Sun Temple",
      },
      {
        question: "The 'Red Fort' in Delhi was originally called?",
        options: ["Qila-e-Mubarak", "Lal Qila", "Fatehpur Fort", "Akbar’s Palace"],
        answer: "Qila-e-Mubarak",
      },
      {
        question: "The 'Kaziranga National Park' is located along which river?",
        options: ["Brahmaputra", "Ganga", "Yamuna", "Godavari"],
        answer: "Brahmaputra",
      },
      {
        question: "The 'Rani Ki Vav' in Gujarat was built during which dynasty?",
        options: [
          "Solanki dynasty",
          "Chola dynasty",
          "Pallava dynasty",
          "Maurya dynasty",
        ],
        answer: "Solanki dynasty",
      },
      {
        question: "The 'Golconda Fort' is famous for its?",
        options: [
          "Acoustic system",
          "Secret tunnels",
          "Underground palace",
          "Floating gardens",
        ],
        answer: "Acoustic system",
      },
      {
        question:
          "The 'Basilica of Bom Jesus' contains the remains of which saint?",
        options: ["St. Francis Xavier", "St. Thomas", "St. Paul", "St. Peter"],
        answer: "St. Francis Xavier",
      },
      {
        question: "The 'Sun Temple' at Modhera is dedicated to which deity?",
        options: ["Surya", "Shiva", "Vishnu", "Durga"],
        answer: "Surya",
      },
      {
        question:
          "Which Indian city is famous for its rock-cut architecture and the 'Group of Monuments at Mahabalipuram'?",
        options: ["Chennai", "Kanchipuram", "Mahabalipuram", "Madurai"],
        answer: "Mahabalipuram",
      },
      {
        question:
          "Which Indian temple is known for its intricate 'Nagas' or snake carvings?",
        options: [
          "Nageshwar Jyotirlinga",
          "Rameshwaram Temple",
          "Somnath Temple",
          "Meenakshi Temple",
        ],
        answer: "Nageshwar Jyotirlinga",
      },
      {
        question:
          "The 'Tawang Monastery' is the largest in India and is located in which state?",
        options: ["Arunachal Pradesh", "Sikkim", "Assam", "Manipur"],
        answer: "Arunachal Pradesh",
      },
      {
        question:
          "Which UNESCO World Heritage site is located on the banks of the river Yamuna?",
        options: ["Taj Mahal", "Agra Fort", "Itimad-ud-Daulah's Tomb", "Red Fort"],
        answer: "Taj Mahal",
      },
      {
        question:
          "The 'Rani Ki Vav' stepwell, a UNESCO heritage site, was built in memory of which ruler?",
        options: ["Bhima I", "Chandragupta Maurya", "Harshavardhana", "Raja Bhoj"],
        answer: "Bhima I",
      },
      {
        question:
          "Which ancient Indian university, a UNESCO heritage site, was destroyed by Bakhtiyar Khilji?",
        options: ["Nalanda", "Takshashila", "Vikramshila", "Pushpagiri"],
        answer: "Nalanda",
      },
      {
        question:
          "The 'Ajanta Caves' contain paintings from which religious tradition?",
        options: ["Buddhism", "Hinduism", "Jainism", "Zoroastrianism"],
        answer: "Buddhism",
      },
      {
        question:
          "Which fort in India is famous for its cannon 'Jaivana', the largest wheeled cannon in the world?",
        options: [
          "Jaigarh Fort",
          "Chittorgarh Fort",
          "Jaisalmer Fort",
          "Golconda Fort",
        ],
        answer: "Jaigarh Fort",
      },
      {
        question:
          "The 'Ellora Caves' contain how many rock-cut temples and monasteries?",
        options: ["34", "25", "40", "18"],
        answer: "34",
      },
      {
        question: "The 'Sun Temple' at Konark is dedicated to which deity?",
        options: ["Surya", "Shiva", "Vishnu", "Lakshmi"],
        answer: "Surya",
      },
      {
        question: "The 'Khajuraho Group of Monuments' is famous for its?",
        options: [
          "Erotic sculptures",
          "Ancient inscriptions",
          "Fresco paintings",
          "Marble carvings",
        ],
        answer: "Erotic sculptures",
      },
      {
        question:
          "Which Indian national park is a UNESCO World Heritage site and home to the snow leopard?",
        options: [
          "Nanda Devi National Park",
          "Sundarbans National Park",
          "Kaziranga National Park",
          "Jim Corbett National Park",
        ],
        answer: "Nanda Devi National Park",
      },
      {
        question: "The 'Brihadeeswarar Temple' was built by which Chola ruler?",
        options: [
          "Raja Raja Chola I",
          "Rajendra Chola I",
          "Vijayalaya Chola",
          "Kulothunga Chola I",
        ],
        answer: "Raja Raja Chola I",
      },
      {
        question:
          "The 'Gateway of India' in Mumbai was built to commemorate the visit of which British monarch?",
        options: [
          "King George V",
          "Queen Victoria",
          "King Edward VII",
          "Queen Elizabeth II",
        ],
        answer: "King George V",
      },
      {
        question: "The 'Fatehpur Sikri' was the capital of which Mughal emperor?",
        options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
        answer: "Akbar",
      },
      {
        question:
          "The 'Hampi Group of Monuments' belonged to which ancient kingdom?",
        options: [
          "Vijayanagara Empire",
          "Chola Empire",
          "Pallava Empire",
          "Pandya Kingdom",
        ],
        answer: "Vijayanagara Empire",
      },
      {
        question: "The 'Charminar' in Hyderabad is made of which material?",
        options: ["Granite", "Limestone", "Marble", "Sandstone"],
        answer: "Limestone",
      },
      {
        question: "The 'Sundarbans National Park' is famous for which animal?",
        options: [
          "Royal Bengal Tiger",
          "Asiatic Lion",
          "Indian Elephant",
          "Snow Leopard",
        ],
        answer: "Royal Bengal Tiger",
      },
      {
        question: "The 'Rani Padmini Palace' is located in which fort?",
        options: [
          "Chittorgarh Fort",
          "Jaisalmer Fort",
          "Mehrangarh Fort",
          "Amber Fort",
        ],
        answer: "Chittorgarh Fort",
      },
      {
        question:
          "Which Indian heritage site is famous for the 'Iron Pillar' that does not rust?",
        options: ["Qutub Minar complex", "Red Fort", "Sanchi Stupa", "Hampi"],
        answer: "Qutub Minar complex",
      },
      {
        question: "The 'Golden Temple' is located in which Indian city?",
        options: ["Amritsar", "Delhi", "Patna", "Ludhiana"],
        answer: "Amritsar",
      },
      {
        question: "The 'Jama Masjid' in Delhi was built by which Mughal ruler?",
        options: ["Shah Jahan", "Aurangzeb", "Akbar", "Babur"],
        answer: "Shah Jahan",
      },
      {
        question: "The 'Dilwara Temples' are located in which state?",
        options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Haryana"],
        answer: "Rajasthan",
      },
      {
        question: "The 'Golconda Fort' is located in which Indian state?",
        options: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu"],
        answer: "Telangana",
      },
      {
        question: "The 'Lotus Temple' in Delhi belongs to which faith?",
        options: ["Bahá'í", "Hinduism", "Jainism", "Islam"],
        answer: "Bahá'í",
      },
      {
        question: "The 'Sanchi Stupa' is located in which Indian state?",
        options: ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Gujarat"],
        answer: "Madhya Pradesh",
      },
      {
        question:
          "The 'Victoria Memorial' in Kolkata is dedicated to which British monarch?",
        options: [
          "Queen Victoria",
          "King George V",
          "King Edward VII",
          "Queen Elizabeth I",
        ],
        answer: "Queen Victoria",
      },
      {
        question: "The 'Mehrangarh Fort' offers a panoramic view of which city?",
        options: ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"],
        answer: "Jodhpur",
      },
      {
        question:
          "Which ancient Indian city is famous for its rock-cut caves and Buddhist monuments?",
        options: ["Ajanta", "Hampi", "Konark", "Mahabalipuram"],
        answer: "Ajanta",
      },
      {
        question:
          "The 'Tawang Monastery', the largest in India, is located in which state?",
        options: ["Arunachal Pradesh", "Sikkim", "Assam", "Manipur"],
        answer: "Arunachal Pradesh",
      },
      {
        question:
          "The 'Ranganathaswamy Temple', famous for its intricate carvings, is located in which state?",
        options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
        answer: "Karnataka",
      },
      {
        question: "The 'Golden Chariot' is associated with which state’s tourism?",
        options: ["Karnataka", "Rajasthan", "Goa", "Kerala"],
        answer: "Karnataka",
      },
    ]
  },
  {
      "topic": "Art and Culture",
      "image": heritage,
      "description": "Discover the architectural wonders and cultural heritage sites of India.",
      "questionsCount": 10,
      "timeLimit": "5 min",
      "questions":
      [
        {
          question:
            "Which Indian classical dance form is associated with the 'Lasya' style, symbolizing grace and femininity?",
          options: ["Mohiniyattam", "Bharatanatyam", "Odissi", "Kathak"],
          answer: "Mohiniyattam",
        },
        {
          question:
            "The 'Chithirai Festival' is celebrated at which famous temple in Tamil Nadu?",
          options: [
            "Meenakshi Amman Temple",
            "Brihadeeswarar Temple",
            "Ramanathaswamy Temple",
            "Kapaleeshwarar Temple",
          ],
          answer: "Meenakshi Amman Temple",
        },
        {
          question: "The 'Koodiyattam' dance form is traditionally performed in?",
          options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
          answer: "Kerala",
        },
        {
          question:
            "The 'Pichwai' paintings, characterized by intricate detailing, are associated with which deity?",
          options: ["Lord Krishna", "Lord Vishnu", "Goddess Lakshmi", "Lord Shiva"],
          answer: "Lord Krishna",
        },
        {
          question:
            "The 'Chhau' dance form, known for its martial art movements, belongs to which state?",
          options: ["Odisha", "Jharkhand", "West Bengal", "All of the above"],
          answer: "All of the above",
        },
        {
          question:
            "The 'Kalamkari' art form uses which natural ingredient for colors?",
          options: [
            "Vegetable dyes",
            "Charcoal powder",
            "Synthetic colors",
            "Plant resin",
          ],
          answer: "Vegetable dyes",
        },
        {
          question: "The 'Kuchipudi' dance form originated in which village?",
          options: [
            "Kuchipudi, Andhra Pradesh",
            "Thanjavur, Tamil Nadu",
            "Udupi, Karnataka",
            "Kochi, Kerala",
          ],
          answer: "Kuchipudi, Andhra Pradesh",
        },
        {
          question:
            "The 'Patola' silk weaving tradition is associated with which state?",
          options: ["Gujarat", "Rajasthan", "Tamil Nadu", "West Bengal"],
          answer: "Gujarat",
        },
        {
          question: "The 'Bagurumba' dance is performed by which tribal community?",
          options: ["Bodo", "Santhal", "Gond", "Bhil"],
          answer: "Bodo",
        },
        {
          question: "The 'Raas Leela' is associated with which state?",
          options: ["Manipur", "Uttar Pradesh", "Gujarat", "Rajasthan"],
          answer: "Manipur",
        },
        {
          question: "The 'Banarasi sarees' are famous for their?",
          options: [
            "Zari work",
            "Block printing",
            "Tie and dye technique",
            "Woolen embroidery",
          ],
          answer: "Zari work",
        },
        {
          question: "The 'Gond' tribal art originates from which region?",
          options: [
            "Central India",
            "North-East India",
            "South India",
            "Western India",
          ],
          answer: "Central India",
        },
        {
          question: "The 'Bhatiali' music form is associated with which occupation?",
          options: ["Boatmen", "Farmers", "Weavers", "Fishermen"],
          answer: "Boatmen",
        },
        {
          question: "The 'Ghumar' dance is traditionally performed during?",
          options: ["Teej festival", "Diwali", "Holi", "Baisakhi"],
          answer: "Teej festival",
        },
        {
          question: "The 'Chittara' art form is practiced in which Indian state?",
          options: ["Karnataka", "Kerala", "Madhya Pradesh", "Gujarat"],
          answer: "Karnataka",
        },
        {
          question: "The 'Bihu' dance is performed during which Assamese festival?",
          options: ["Rongali Bihu", "Magh Bihu", "Kati Bihu", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "The 'Pandavani' folk music is associated with which state?",
          options: ["Chhattisgarh", "Madhya Pradesh", "Odisha", "Rajasthan"],
          answer: "Chhattisgarh",
        },
        {
          question: "The 'Tanjore paintings' are famous for their use of?",
          options: ["Gold leaf", "Silver coating", "Vegetable dyes", "Iron oxide"],
          answer: "Gold leaf",
        },
        {
          question:
            "The 'Patachitra' painting style is most commonly associated with?",
          options: ["Odisha", "West Bengal", "Assam", "Bihar"],
          answer: "Odisha",
        },
        {
          question: "The 'Jatra' folk theatre form is popular in which state?",
          options: ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
          answer: "West Bengal",
        },
        {
          question: "The 'Mayurbhanj Chhau' is performed without?",
          options: ["Masks", "Music", "Props", "Costumes"],
          answer: "Masks",
        },
        {
          question:
            "The 'Dhokra' art form is traditionally practiced by which tribe?",
          options: ["Dhokra Damar", "Santhal", "Bhil", "Munda"],
          answer: "Dhokra Damar",
        },
        {
          question: "The 'Pung Cholom' dance is a part of which larger dance form?",
          options: ["Manipuri", "Odissi", "Kathak", "Bharatanatyam"],
          answer: "Manipuri",
        },
        {
          question: "The 'Lavani' dance form is performed in which state?",
          options: ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat"],
          answer: "Maharashtra",
        },
        {
          question:
            "The 'Bandhani' fabric dyeing technique is traditionally practiced in?",
          options: [
            "Gujarat and Rajasthan",
            "Punjab and Haryana",
            "Kerala and Tamil Nadu",
            "Maharashtra and Goa",
          ],
          answer: "Gujarat and Rajasthan",
        },
        {
          question: "The 'Naga dance' is a traditional folk dance performed during?",
          options: ["Hornbill Festival", "Baisakhi", "Bihu", "Pongal"],
          answer: "Hornbill Festival",
        },
        {
          question: "The 'Warli' paintings traditionally depict?",
          options: [
            "Tribal life and nature",
            "Religious epics",
            "Royal life",
            "Battle scenes",
          ],
          answer: "Tribal life and nature",
        },
        {
          question: "The 'Vesara' style of temple architecture is a blend of?",
          options: [
            "Nagara and Dravida styles",
            "Buddhist and Jain styles",
            "Indo-Islamic styles",
            "Hoysala and Chola styles",
          ],
          answer: "Nagara and Dravida styles",
        },
        {
          question: "The 'Panchavadyam' is a traditional music ensemble from?",
          options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
          answer: "Kerala",
        },
        {
          question: "The 'Manipuri Sankirtana' is recognized by UNESCO as?",
          options: [
            "Intangible Cultural Heritage",
            "World Heritage Site",
            "Natural Wonder",
            "Modern Art",
          ],
          answer: "Intangible Cultural Heritage",
        },
        {
          question:
            "The 'Kavad' storytelling tradition is practiced in which Indian state?",
          options: ["Rajasthan", "Madhya Pradesh", "Gujarat", "Uttar Pradesh"],
          answer: "Rajasthan",
        },
        {
          question: "The 'Phad' painting style is traditionally used to depict?",
          options: [
            "Folk tales",
            "Royal battles",
            "Religious stories",
            "Nature scenes",
          ],
          answer: "Religious stories",
        },
        {
          question: "The 'Tholu Bommalata' is a shadow puppetry tradition from?",
          options: ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala"],
          answer: "Andhra Pradesh",
        },
        {
          question: "The 'Bastar Dhokra' is a famous art form of which tribe?",
          options: ["Gond", "Bhil", "Murya", "Maria"],
          answer: "Gond",
        },
        {
          question:
            "The 'Channapatna toys', known for their colorful lacquer finish, originate from?",
          options: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Kerala"],
          answer: "Karnataka",
        },
        {
          question: "The 'Bhavai' folk theatre form is associated with which deity?",
          options: ["Goddess Amba", "Lord Krishna", "Lord Shiva", "Goddess Durga"],
          answer: "Goddess Amba",
        },
        {
          question: "The 'Gidda' dance is traditionally performed by?",
          options: [
            "Punjabi women",
            "Gujarati men",
            "Rajasthani folk dancers",
            "Tamil Nadu villagers",
          ],
          answer: "Punjabi women",
        },
        {
          question: "The 'Yakshagana' dance-drama is famous in which Indian state?",
          options: ["Karnataka", "Kerala", "Tamil Nadu", "Maharashtra"],
          answer: "Karnataka",
        },
        {
          question: "The 'Tanjore dolls' are unique for their?",
          options: [
            "Bobblehead movement",
            "Metallic finish",
            "Gold leaf design",
            "Clay craftsmanship",
          ],
          answer: "Bobblehead movement",
        },
        {
          question: "The 'Kalamezhuthu' is a ritual art form performed in?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question: "The 'Chhau mask dance' originated in which state?",
          options: ["West Bengal", "Odisha", "Jharkhand", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "The 'Cheriyal scroll paintings' belong to which state?",
          options: ["Telangana", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
          answer: "Telangana",
        },
        {
          question: "The 'Shilpgram' festival is held annually in?",
          options: ["Udaipur", "Jaipur", "Jodhpur", "Ajmer"],
          answer: "Udaipur",
        },
        {
          question: "The 'Koli' dance is a popular folk dance of?",
          options: ["Maharashtra", "Goa", "Gujarat", "Kerala"],
          answer: "Maharashtra",
        },
        {
          question: "The 'Garba' dance is performed during which festival?",
          options: ["Navratri", "Diwali", "Holi", "Dussehra"],
          answer: "Navratri",
        },
        {
          question: "The 'Sattriya' dance form is associated with which state?",
          options: ["Assam", "West Bengal", "Tripura", "Odisha"],
          answer: "Assam",
        },
        {
          question: "The 'Teej' festival is celebrated to honor?",
          options: ["Goddess Parvati", "Lord Shiva", "Lord Krishna", "Goddess Durga"],
          answer: "Goddess Parvati",
        },
        {
          question: "The 'Channapatna' toys are made of which material?",
          options: ["Wood", "Clay", "Metal", "Paper mache"],
          answer: "Wood",
        },
        {
          question: "The 'Bagurumba' folk dance is associated with which tribe?",
          options: ["Bodo", "Mishing", "Karbi", "Dimasa"],
          answer: "Bodo",
        },
        {
          question: "The 'Chakyar Koothu' is a traditional dance form of?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question: "The 'Naga shawl' is famous for its?",
          options: [
            "Geometric patterns",
            "Metallic threads",
            "Bright floral motifs",
            "Abstract designs",
          ],
          answer: "Geometric patterns",
        },
        {
          question: "The 'Bidriware' metal handicraft is native to which state?",
          options: ["Karnataka", "Telangana", "Maharashtra", "Rajasthan"],
          answer: "Karnataka",
        },
        {
          question: "The 'Gond' paintings use which color palette?",
          options: [
            "Bright primary colors",
            "Earth tones",
            "Metallic hues",
            "Black and white",
          ],
          answer: "Bright primary colors",
        },
        {
          question: "The 'Tanjore' paintings are famous for using?",
          options: ["Gold foil", "Silver inlay", "Silk canvas", "Ivory dust"],
          answer: "Gold foil",
        },
        {
          question: "The 'Palkhi' festival is associated with which deity?",
          options: ["Vithoba", "Lord Shiva", "Lord Krishna", "Lord Vishnu"],
          answer: "Vithoba",
        },
        {
          question: "The 'Zardozi' embroidery is traditionally associated with?",
          options: [
            "Gold and silver threads",
            "Silk fabric",
            "Woolen cloth",
            "Cotton threads",
          ],
          answer: "Gold and silver threads",
        },
        {
          question: "The 'Puli Kali' dance is performed during?",
          options: ["Onam", "Vishu", "Navratri", "Diwali"],
          answer: "Onam",
        },
        {
          question: "The 'Buddhist Thangka paintings' are traditionally made on?",
          options: [
            "Cotton or silk fabric",
            "Wood panels",
            "Clay boards",
            "Palm leaves",
          ],
          answer: "Cotton or silk fabric",
        },
        {
          question: "The 'Phulkari' embroidery is associated with which state?",
          options: ["Punjab", "Haryana", "Rajasthan", "Himachal Pradesh"],
          answer: "Punjab",
        },
        {
          question: "The 'Cheriyal scrolls' depict?",
          options: [
            "Mythological stories",
            "Nature scenes",
            "Abstract art",
            "Political events",
          ],
          answer: "Mythological stories",
        },
        {
          question: "The 'Bhavai' theatre form is performed with?",
          options: ["Masks", "Props", "Bare face", "Elaborate makeup"],
          answer: "Masks",
        },
        {
          question: "The 'Kathakali' dance traditionally depicts stories from?",
          options: [
            "Ramayana and Mahabharata",
            "Jataka tales",
            "Puranas",
            "Buddhist scriptures",
          ],
          answer: "Ramayana and Mahabharata",
        },
        {
          question:
            "The 'Mudiyettu' ritual theatre is associated with which Indian state?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question: "The 'Thang-Ta' martial art form belongs to which Indian state?",
          options: ["Manipur", "Assam", "Nagaland", "Meghalaya"],
          answer: "Manipur",
        },
        {
          question:
            "The 'Rogan art', a rare form of textile painting, is practiced in?",
          options: ["Gujarat", "Rajasthan", "Punjab", "Madhya Pradesh"],
          answer: "Gujarat",
        },
        {
          question:
            "The 'Pulikali' dance, known for its tiger themes, is performed during which festival?",
          options: ["Onam", "Vishu", "Pongal", "Navratri"],
          answer: "Onam",
        },
        {
          question: "The 'Patayani' ritualistic dance-drama is associated with?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question: "The 'Ravanachhaya' shadow puppetry form originates from?",
          options: ["Odisha", "West Bengal", "Andhra Pradesh", "Telangana"],
          answer: "Odisha",
        },
        {
          question: "The 'Pung Cholom' dance is accompanied by which instrument?",
          options: ["Drum", "Flute", "Violin", "Sitar"],
          answer: "Drum",
        },
        {
          question:
            "The 'Ganjifa' card game, popular in medieval India, originated in?",
          options: ["Maharashtra", "Rajasthan", "Karnataka", "Odisha"],
          answer: "Maharashtra",
        },
        {
          question: "The 'Dandiya Raas' dance is traditionally performed with?",
          options: ["Sticks", "Hand movements only", "Props", "Masks"],
          answer: "Sticks",
        },
        {
          question:
            "The 'Naatu Naatu' song, which won an Oscar, is from which Indian movie?",
          options: ["RRR", "Baahubali", "Pushpa", "Kantara"],
          answer: "RRR",
        },
        {
          question: "The 'Kalighat paintings' originated in which city?",
          options: ["Kolkata", "Varanasi", "Chennai", "Jaipur"],
          answer: "Kolkata",
        },
        {
          question:
            "The 'Koya dance' is a traditional dance of which tribal community?",
          options: ["Telangana", "Odisha", "Chhattisgarh", "Madhya Pradesh"],
          answer: "Telangana",
        },
        {
          question: "The 'Gotipua' dance, a precursor to Odissi, is performed by?",
          options: [
            "Young boys dressed as girls",
            "Women",
            "Elderly dancers",
            "Martial artists",
          ],
          answer: "Young boys dressed as girls",
        },
        {
          question: "The 'Saura paintings' are native to which state?",
          options: ["Odisha", "Chhattisgarh", "Jharkhand", "Bihar"],
          answer: "Odisha",
        },
        {
          question:
            "The 'Bohada' mask festival is celebrated by which tribal community?",
          options: ["Maharashtra", "Odisha", "Assam", "Rajasthan"],
          answer: "Maharashtra",
        },
        {
          question: "The 'Paithani sarees' are famous for their?",
          options: [
            "Gold and silver borders",
            "Silk embroidery",
            "Block prints",
            "Woolen texture",
          ],
          answer: "Gold and silver borders",
        },
        {
          question: "The 'Nongkrem dance' is performed by which tribe?",
          options: ["Khasi", "Garo", "Jaintia", "Mizo"],
          answer: "Khasi",
        },
        {
          question: "The 'Bhagavata Mela' is a dance-drama tradition of which state?",
          options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
          answer: "Tamil Nadu",
        },
        {
          question: "The 'Bhand Pather' folk theatre is practiced in?",
          options: ["Jammu and Kashmir", "Punjab", "Himachal Pradesh", "Uttarakhand"],
          answer: "Jammu and Kashmir",
        },
        {
          question: "The 'Bhavai' folk dance is mainly performed by?",
          options: [
            "Women balancing pots",
            "Men in colorful attire",
            "Children with masks",
            "Martial artists",
          ],
          answer: "Women balancing pots",
        },
        {
          question: "The 'Raas Leela' dance of Manipur is dedicated to?",
          options: ["Lord Krishna", "Goddess Durga", "Lord Shiva", "Lord Vishnu"],
          answer: "Lord Krishna",
        },
        {
          question: "The 'Veeragase' dance is associated with which state?",
          options: ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"],
          answer: "Karnataka",
        },
        {
          question: "The 'Koli dance' of Maharashtra symbolizes?",
          options: [
            "Fishing activities",
            "Harvest season",
            "Wedding rituals",
            "Religious celebrations",
          ],
          answer: "Fishing activities",
        },
        {
          question: "The 'Ghumar' dance is performed during which occasion?",
          options: [
            "Marriages",
            "Festivals",
            "Harvest season",
            "Religious processions",
          ],
          answer: "Festivals",
        },
        {
          question: "The 'Kuchipudi' dance is associated with which deity?",
          options: ["Lord Krishna", "Lord Shiva", "Lord Vishnu", "Goddess Parvati"],
          answer: "Lord Krishna",
        },
        {
          question: "The 'Yakshagana' dance form uses which instrument?",
          options: ["Maddale", "Tabla", "Sitar", "Flute"],
          answer: "Maddale",
        },
        {
          question: "The 'Phad' paintings narrate the tales of which deity?",
          options: ["Pabuji", "Lord Krishna", "Lord Shiva", "Goddess Lakshmi"],
          answer: "Pabuji",
        },
        {
          question: "The 'Kalamkari' art uses which type of brush?",
          options: ["Bamboo pen", "Feather brush", "Synthetic brush", "Cotton stick"],
          answer: "Bamboo pen",
        },
        {
          question: "The 'Chitrakathi' paintings are popular in?",
          options: ["Maharashtra", "Gujarat", "Rajasthan", "Karnataka"],
          answer: "Maharashtra",
        },
        {
          question: "The 'Bidriware' craft uses which metal?",
          options: [
            "Zinc and copper",
            "Iron and brass",
            "Silver and gold",
            "Lead and tin",
          ],
          answer: "Zinc and copper",
        },
        {
          question: "The 'Cheraw dance' is performed by which tribe?",
          options: ["Mizo", "Naga", "Khasi", "Garo"],
          answer: "Mizo",
        },
        {
          question: "The 'Sattriya' dance form originated in?",
          options: ["Assam", "Odisha", "West Bengal", "Tripura"],
          answer: "Assam",
        },
        {
          question: "The 'Rathwa ni Gher' dance belongs to which state?",
          options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
          answer: "Gujarat",
        },
        {
          question: "The 'Bardo Chham' dance belongs to which state?",
          options: ["Arunachal Pradesh", "Sikkim", "Manipur", "Nagaland"],
          answer: "Arunachal Pradesh",
        },
        {
          question:
            "Which of the following dance forms originated in Kerala and is known for its elaborate costumes and face paint?",
          options: ["Kathakali", "Bharatanatyam", "Odissi", "Mohiniyattam"],
          answer: "Kathakali",
        },
        {
          question:
            "The 'Sattriya' dance form is associated with which Indian state?",
          options: ["Assam", "Manipur", "Odisha", "Tripura"],
          answer: "Assam",
        },
        {
          question:
            "Which Indian classical music gharana is associated with the city of Gwalior?",
          options: [
            "Gwalior Gharana",
            "Kirana Gharana",
            "Jaipur Gharana",
            "Patiala Gharana",
          ],
          answer: "Gwalior Gharana",
        },
        {
          question: "The famous 'Ajanta Caves' are known for their?",
          options: [
            "Buddhist frescoes and paintings",
            "Hindu temple carvings",
            "Jain sculptures",
            "Islamic calligraphy",
          ],
          answer: "Buddhist frescoes and paintings",
        },
        {
          question:
            "Which of the following is a famous folk theatre form of Maharashtra?",
          options: ["Tamasha", "Jatra", "Yakshagana", "Bhand Pather"],
          answer: "Tamasha",
        },
        {
          question:
            "The 'Chhau' dance is traditionally performed in which Indian state?",
          options: ["Odisha", "West Bengal", "Jharkhand", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "Who painted the famous work 'Bharat Mata'?",
          options: [
            "Abanindranath Tagore",
            "Raja Ravi Varma",
            "Nandalal Bose",
            "Jamini Roy",
          ],
          answer: "Abanindranath Tagore",
        },
        {
          question:
            "The 'Rajasthani Miniature Painting' style is mainly characterized by?",
          options: [
            "Bright colors and intricate detailing",
            "Monochrome shades",
            "Watercolor technique",
            "Abstract brush strokes",
          ],
          answer: "Bright colors and intricate detailing",
        },
        {
          question: "The 'Thanjavur paintings' originated in which Indian state?",
          options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
          answer: "Tamil Nadu",
        },
        {
          question:
            "Which form of painting uses rice paste and natural colors on cloth?",
          options: ["Pattachitra", "Madhubani", "Warli", "Kalamkari"],
          answer: "Kalamkari",
        },
        {
          question:
            "Which ancient Indian text is associated with the theory of performing arts, including dance and drama?",
          options: ["Natya Shastra", "Manusmriti", "Rigveda", "Arthashastra"],
          answer: "Natya Shastra",
        },
        {
          question: "Who is considered the father of modern Indian art?",
          options: [
            "Raja Ravi Varma",
            "Abanindranath Tagore",
            "Jamini Roy",
            "Nandalal Bose",
          ],
          answer: "Raja Ravi Varma",
        },
        {
          question:
            "The 'Ghoomar' dance is a traditional folk dance of which Indian state?",
          options: ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
          answer: "Rajasthan",
        },
        {
          question: "The 'Yakshagana' dance-drama is popular in which Indian state?",
          options: ["Karnataka", "Andhra Pradesh", "Kerala", "Tamil Nadu"],
          answer: "Karnataka",
        },
        {
          question: "The 'Bharatnatyam' dance form originated from?",
          options: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Odisha"],
          answer: "Tamil Nadu",
        },
        {
          question:
            "The 'Warli' painting is traditionally done by which tribal community?",
          options: ["Maharashtra", "Madhya Pradesh", "Odisha", "Chhattisgarh"],
          answer: "Maharashtra",
        },
        {
          question: "Which of the following is a form of ancient Indian puppetry?",
          options: ["Kathputli", "Tamasha", "Pattachitra", "Kolam"],
          answer: "Kathputli",
        },
        {
          question: "The 'Manganiyar' folk musicians belong to which Indian state?",
          options: ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
          answer: "Rajasthan",
        },
        {
          question:
            "Which festival is associated with the traditional dance form 'Garba'?",
          options: ["Navratri", "Diwali", "Holi", "Pongal"],
          answer: "Navratri",
        },
        {
          question: "The 'Koodiyattam' is a traditional performing art form from?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question:
            "The 'Chakri' dance is performed by which community in Rajasthan?",
          options: ["Banjara", "Kalbelia", "Meena", "Rajput"],
          answer: "Kalbelia",
        },
        {
          question: "Who composed the famous Indian epic 'Meghdoot'?",
          options: ["Kalidasa", "Vishnu Sharma", "Valmiki", "Tulsidas"],
          answer: "Kalidasa",
        },
        {
          question: "The 'Sopana Sangeetham' is a musical tradition of which state?",
          options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
          answer: "Kerala",
        },
        {
          question: "The 'Rasa Lila' dance form is associated with which deity?",
          options: ["Lord Krishna", "Lord Shiva", "Goddess Durga", "Lord Vishnu"],
          answer: "Lord Krishna",
        },
        {
          question: "The 'Pattachitra' painting style belongs to which state?",
          options: ["Odisha", "Bihar", "West Bengal", "Assam"],
          answer: "Odisha",
        },
        {
          question: "Which Indian state is famous for 'Tanjore' paintings?",
          options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
          answer: "Tamil Nadu",
        },
        {
          question: "The 'Kathak' dance form was influenced by?",
          options: [
            "Mughal culture",
            "Dravidian culture",
            "Rajputana tradition",
            "Buddhism",
          ],
          answer: "Mughal culture",
        },
        {
          question:
            "The 'Manipuri' dance form is associated with which Indian state?",
          options: ["Manipur", "Nagaland", "Assam", "Meghalaya"],
          answer: "Manipur",
        },
        {
          question: "The 'Bhavai' dance form is performed in?",
          options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"],
          answer: "Gujarat",
        },
        {
          question: "The 'Mohiniyattam' dance form originated in?",
          options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          answer: "Kerala",
        },
        {
          question: "Which festival features the 'Bihu' dance in Assam?",
          options: ["Rongali Bihu", "Durga Puja", "Baisakhi", "Lohri"],
          answer: "Rongali Bihu",
        },
      ]
    },
    {
        "topic": "Food",
        "image": food,
        "description": "Discover the architectural wonders and cultural heritage sites of India.",
        "questionsCount": 10,
        "timeLimit": "5 min",
        "questions":
        [
          {
            question: "Which Indian state is famous for 'Dhokla'?",
            options: ["Gujarat", "Rajasthan", "Punjab", "Maharashtra"],
            answer: "Gujarat",
          },
          {
            question: "Which spice is known as 'King of Spices' in Indian cuisine?",
            options: ["Black pepper", "Cardamom", "Clove", "Turmeric"],
            answer: "Black pepper",
          },
          {
            question: "The dish 'Rogan Josh' originates from which region of India?",
            options: ["Kashmir", "Punjab", "Rajasthan", "Kerala"],
            answer: "Kashmir",
          },
          {
            question:
              "Which festival is associated with the preparation of 'Puran Poli'?",
            options: ["Ganesh Chaturthi", "Diwali", "Makar Sankranti", "Holi"],
            answer: "Makar Sankranti",
          },
          {
            question:
              "What is the primary ingredient in 'Baati' from 'Dal Baati Churma'?",
            options: ["Wheat flour", "Rice flour", "Semolina", "Maida"],
            answer: "Wheat flour",
          },
          {
            question: "Which region is famous for 'Chettinad Cuisine'?",
            options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
            answer: "Tamil Nadu",
          },
          {
            question:
              "Which Indian sweet is made from chickpea flour, ghee, and sugar?",
            options: ["Besan Laddu", "Rasgulla", "Kaju Katli", "Jalebi"],
            answer: "Besan Laddu",
          },
          {
            question: "What is the primary ingredient in 'Sarson da Saag'?",
            options: [
              "Mustard leaves",
              "Spinach",
              "Fenugreek leaves",
              "Collard greens",
            ],
            answer: "Mustard leaves",
          },
          {
            question: "Which Indian bread is cooked in a tandoor?",
            options: ["Naan", "Paratha", "Poori", "Bhakri"],
            answer: "Naan",
          },
          {
            question:
              "The dish 'Pongal' is traditionally prepared during which festival?",
            options: ["Pongal", "Onam", "Ugadi", "Navratri"],
            answer: "Pongal",
          },
          {
            question: "Which region of India is famous for 'Litti Chokha'?",
            options: ["Bihar", "Uttar Pradesh", "Rajasthan", "West Bengal"],
            answer: "Bihar",
          },
          {
            question: "Which Indian spice is also known as 'golden spice'?",
            options: ["Turmeric", "Saffron", "Cumin", "Coriander"],
            answer: "Turmeric",
          },
          {
            question: "What is the primary ingredient in 'Masala Dosa'?",
            options: ["Rice and urad dal", "Wheat flour", "Semolina", "Gram flour"],
            answer: "Rice and urad dal",
          },
          {
            question: "The sweet dish 'Modak' is associated with which deity?",
            options: ["Ganesha", "Krishna", "Lakshmi", "Shiva"],
            answer: "Ganesha",
          },
          {
            question: "What is the key ingredient in 'Paneer Tikka'?",
            options: ["Cottage cheese", "Tofu", "Curd", "Cream"],
            answer: "Cottage cheese",
          },
          {
            question: "Which spice gives 'Tandoori Chicken' its red color?",
            options: ["Kashmiri red chili", "Turmeric", "Coriander", "Clove"],
            answer: "Kashmiri red chili",
          },
          {
            question: "What is the primary ingredient in 'Rajma'?",
            options: ["Kidney beans", "Black lentils", "Chickpeas", "Green gram"],
            answer: "Kidney beans",
          },
          {
            question: "Which Indian state is famous for 'Chole Bhature'?",
            options: ["Punjab", "Delhi", "Uttar Pradesh", "Haryana"],
            answer: "Punjab",
          },
          {
            question: "The beverage 'Thandai' is associated with which festival?",
            options: ["Holi", "Diwali", "Baisakhi", "Navratri"],
            answer: "Holi",
          },
          {
            question: "Which rice variety is used to prepare 'Hyderabadi Biryani'?",
            options: ["Basmati", "Sona Masuri", "Ponni", "Jeera Samba"],
            answer: "Basmati",
          },
          {
            question: "Which Indian dish uses fermented rice and urad dal batter?",
            options: ["Idli", "Dhokla", "Aloo Paratha", "Pesarattu"],
            answer: "Idli",
          },
          {
            question: "What is the primary ingredient in 'Pani Puri' water?",
            options: ["Tamarind", "Mint", "Cumin", "Jaggery"],
            answer: "Mint",
          },
          {
            question: "Which Indian state is famous for 'Pesarattu'?",
            options: ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala"],
            answer: "Andhra Pradesh",
          },
          {
            question: "What is 'Chhena Poda', a dessert made from?",
            options: ["Paneer", "Rice flour", "Wheat flour", "Semolina"],
            answer: "Paneer",
          },
          {
            question: "Which spice is known as 'queen of spices' in India?",
            options: ["Cardamom", "Clove", "Cinnamon", "Nutmeg"],
            answer: "Cardamom",
          },
          {
            question:
              "Which Indian snack is made from puffed rice, peanuts, and spices?",
            options: ["Bhel Puri", "Pav Bhaji", "Dhokla", "Kachori"],
            answer: "Bhel Puri",
          },
          {
            question: "The dessert 'Mishti Doi' originates from?",
            options: ["West Bengal", "Punjab", "Odisha", "Bihar"],
            answer: "West Bengal",
          },
          {
            question: "Which region is famous for the preparation of 'Bisi Bele Bath'?",
            options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
            answer: "Karnataka",
          },
          {
            question: "Which ingredient gives 'Butter Chicken' its creamy texture?",
            options: ["Cream", "Curd", "Coconut milk", "Cheese"],
            answer: "Cream",
          },
          {
            question: "What is the primary ingredient in 'Kheer'?",
            options: ["Rice", "Wheat", "Corn", "Semolina"],
            answer: "Rice",
          },
          {
            question: "Which fruit is used in the preparation of 'Aam Panna'?",
            options: ["Raw mango", "Guava", "Papaya", "Pineapple"],
            answer: "Raw mango",
          },
          {
            question: "The dish 'Pav Bhaji' originated in?",
            options: ["Mumbai", "Delhi", "Lucknow", "Chennai"],
            answer: "Mumbai",
          },
          {
            question: "Which dish is commonly served with 'Sarson da Saag'?",
            options: ["Makki di Roti", "Naan", "Roti", "Paratha"],
            answer: "Makki di Roti",
          },
          {
            question: "What is the primary ingredient in 'Chana Masala'?",
            options: ["Chickpeas", "Kidney beans", "Black gram", "Lentils"],
            answer: "Chickpeas",
          },
          {
            question: "Which state is known for the dish 'Undhiyu'?",
            options: ["Gujarat", "Rajasthan", "Punjab", "Maharashtra"],
            answer: "Gujarat",
          },
          {
            question: "Which Indian spice is commonly used in 'Chai Masala'?",
            options: ["Cardamom", "Turmeric", "Cumin", "Clove"],
            answer: "Cardamom",
          },
          {
            question: "The dish 'Vindaloo' originated from which region of India?",
            options: ["Goa", "Kerala", "Punjab", "Rajasthan"],
            answer: "Goa",
          },
          {
            question: "Which lentil is used to prepare 'Dal Tadka'?",
            options: ["Toor dal", "Urad dal", "Moong dal", "Chana dal"],
            answer: "Toor dal",
          },
          {
            question: "What is the key ingredient in 'Saag Paneer'?",
            options: [
              "Spinach",
              "Mustard greens",
              "Cottage cheese",
              "Fenugreek leaves",
            ],
            answer: "Spinach",
          },
          {
            question:
              "Which Indian dessert is made by frying milk solids and soaking them in sugar syrup?",
            options: ["Gulab Jamun", "Rasgulla", "Jalebi", "Balushahi"],
            answer: "Gulab Jamun",
          },
          {
            question:
              "Which dish is traditionally cooked in a clay oven called 'tandoor'?",
            options: ["Tandoori Chicken", "Dosa", "Pulao", "Khichdi"],
            answer: "Tandoori Chicken",
          },
          {
            question: "What is the main ingredient in 'Chakli'?",
            options: ["Rice flour", "Gram flour", "Wheat flour", "Corn flour"],
            answer: "Rice flour",
          },
          {
            question: "Which region is famous for the dish 'Avial'?",
            options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
            answer: "Kerala",
          },
          {
            question: "The street food 'Vada Pav' is associated with which city?",
            options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            answer: "Mumbai",
          },
          {
            question:
              "Which festival is associated with the preparation of 'Sevaiyan'?",
            options: ["Eid", "Holi", "Diwali", "Christmas"],
            answer: "Eid",
          },
          {
            question: "What is the primary ingredient in 'Pithla Bhakri'?",
            options: ["Gram flour", "Wheat flour", "Rice flour", "Semolina"],
            answer: "Gram flour",
          },
          {
            question: "Which Indian beverage is made from yogurt, water, and spices?",
            options: ["Chaas", "Lassi", "Thandai", "Aam Panna"],
            answer: "Chaas",
          },
          {
            question: "Which Indian dessert is made from condensed milk and sugar?",
            options: ["Kalakand", "Jalebi", "Kaju Katli", "Barfi"],
            answer: "Kalakand",
          },
          {
            question: "Which dish is prepared using black gram and served with rice?",
            options: ["Dal Makhani", "Rasam", "Sambar", "Chole"],
            answer: "Dal Makhani",
          },
          {
            question: "Which state is famous for 'Misal Pav'?",
            options: ["Maharashtra", "Goa", "Karnataka", "Gujarat"],
            answer: "Maharashtra",
          },
          {
            question: "What is the key ingredient in 'Pakhala Bhata' from Odisha?",
            options: ["Fermented rice", "Curd", "Lentils", "Wheat"],
            answer: "Fermented rice",
          },
          {
            question: "The dessert 'Rabri' is made by boiling?",
            options: ["Milk", "Curd", "Cream", "Condensed milk"],
            answer: "Milk",
          },
          {
            question: "Which dish is made from wheat, ghee, and sugar?",
            options: ["Halwa", "Kheer", "Peda", "Sheera"],
            answer: "Halwa",
          },
          {
            question: "The dish 'Paniyaram' originates from?",
            options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
            answer: "Tamil Nadu",
          },
          {
            question: "Which spice is essential for making 'Chaat Masala'?",
            options: ["Black salt", "Cumin", "Coriander", "Fenugreek"],
            answer: "Black salt",
          },
          {
            question: "What is the main ingredient in 'Patrode' from Karnataka?",
            options: ["Colocasia leaves", "Spinach", "Mustard leaves", "Banana leaves"],
            answer: "Colocasia leaves",
          },
          {
            question: "Which Indian dish is prepared with tamarind and jaggery sauce?",
            options: ["Sambhar", "Rasam", "Chaat", "Pani Puri"],
            answer: "Chaat",
          },
          {
            question: "Which region is famous for 'Sidu' bread?",
            options: ["Himachal Pradesh", "Punjab", "Rajasthan", "Uttarakhand"],
            answer: "Himachal Pradesh",
          },
          {
            question: "Which ingredient is common in 'Gujarati Kadhi'?",
            options: ["Curd", "Coconut", "Tamarind", "Gram flour"],
            answer: "Curd",
          },
          {
            question: "The dish 'Ker Sangri' is associated with which state?",
            options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"],
            answer: "Rajasthan",
          },
          {
            question: "What is the primary ingredient in 'Makki di Roti'?",
            options: ["Corn flour", "Wheat flour", "Rice flour", "Maida"],
            answer: "Corn flour",
          },
          {
            question: "The street food 'Phuchka' is famous in?",
            options: ["West Bengal", "Punjab", "Maharashtra", "Uttar Pradesh"],
            answer: "West Bengal",
          },
          {
            question: "Which Indian sweet is shaped like a cone and made of khoya?",
            options: ["Peda", "Gulab Jamun", "Chhena Poda", "Chhena Jhili"],
            answer: "Peda",
          },
          {
            question: "What is the key ingredient in 'Bisi Bele Bath'?",
            options: ["Rice and lentils", "Wheat", "Semolina", "Corn flour"],
            answer: "Rice and lentils",
          },
          {
            question: "Which region is famous for 'Bamboo Shoot Pickle'?",
            options: ["Nagaland", "Assam", "Manipur", "Mizoram"],
            answer: "Nagaland",
          },
          {
            question: "Which sweet dish is prepared during 'Chhath Puja'?",
            options: ["Thekua", "Peda", "Barfi", "Rasgulla"],
            answer: "Thekua",
          },
          {
            question: "Which Indian spice is known for its cooling properties?",
            options: ["Fennel seeds", "Cinnamon", "Clove", "Black pepper"],
            answer: "Fennel seeds",
          },
          {
            question: "What is the main ingredient in 'Appam'?",
            options: ["Rice flour", "Wheat flour", "Gram flour", "Corn flour"],
            answer: "Rice flour",
          },
          {
            question: "Which Indian bread is made from fermented rice batter?",
            options: ["Appam", "Roti", "Naan", "Bhakri"],
            answer: "Appam",
          },
          {
            question: "The dish 'Baigan Bharta' is made using?",
            options: ["Brinjal", "Potato", "Cauliflower", "Tomato"],
            answer: "Brinjal",
          },
          {
            question: "Which region of India is famous for the dish 'Thukpa'?",
            options: ["Ladakh", "Assam", "Manipur", "Sikkim"],
            answer: "Ladakh",
          },
          {
            question: "What is the key ingredient in 'Poha'?",
            options: ["Flattened rice", "Wheat", "Gram flour", "Semolina"],
            answer: "Flattened rice",
          },
          {
            question:
              "Which Indian dish is made from fermented rice and black gram batter?",
            options: ["Dosa", "Paratha", "Poori", "Bhatura"],
            answer: "Dosa",
          },
          {
            question: "Which Indian spice is known for its antiseptic properties?",
            options: ["Turmeric", "Clove", "Cinnamon", "Fennel"],
            answer: "Turmeric",
          },
          {
            question: "Which dish is traditionally prepared during 'Janmashtami'?",
            options: ["Panchamrit", "Lassi", "Kheer", "Modak"],
            answer: "Panchamrit",
          },
          {
            question: "Which Indian sweet is made from condensed milk and sugar syrup?",
            options: ["Rasgulla", "Jalebi", "Gulab Jamun", "Balushahi"],
            answer: "Gulab Jamun",
          },
          {
            question: "What is the primary ingredient in 'Samosa' filling?",
            options: ["Potato", "Paneer", "Cauliflower", "Carrot"],
            answer: "Potato",
          },
          {
            question: "Which region is famous for 'Malpua'?",
            options: ["Bihar", "Odisha", "Rajasthan", "Uttar Pradesh"],
            answer: "Odisha",
          },
          {
            question: "What is the key ingredient in 'Dal Bati Churma'?",
            options: ["Wheat flour", "Rice flour", "Corn flour", "Gram flour"],
            answer: "Wheat flour",
          },
          {
            question: "Which festival is associated with the preparation of 'Gujiya'?",
            options: ["Holi", "Diwali", "Navratri", "Raksha Bandhan"],
            answer: "Holi",
          },
          {
            question: "Which Indian bread is deep-fried and puffy?",
            options: ["Poori", "Naan", "Roti", "Paratha"],
            answer: "Poori",
          },
          {
            question: "Which dish is traditionally cooked in mustard oil in Bengal?",
            options: ["Fish curry", "Pulao", "Chole", "Aloo Paratha"],
            answer: "Fish curry",
          },
          {
            question: "The dish 'Handi Biryani' is cooked in which utensil?",
            options: ["Clay pot", "Steel pot", "Iron pan", "Brass vessel"],
            answer: "Clay pot",
          },
          {
            question: "Which Indian spice is used to make 'Garam Masala'?",
            options: ["Cinnamon", "Turmeric", "Fennel", "Black salt"],
            answer: "Cinnamon",
          },
          {
            question: "Which region is famous for 'Meen Moilee'?",
            options: ["Kerala", "Tamil Nadu", "Goa", "Andhra Pradesh"],
            answer: "Kerala",
          },
          {
            question:
              "Which Indian snack is made of rice flakes, potatoes, and peanuts?",
            options: ["Bhel Puri", "Sev Puri", "Pav Bhaji", "Ragda Pattice"],
            answer: "Bhel Puri",
          },
          {
            question: "The dish 'Shahi Tukda' is associated with which cuisine?",
            options: ["Mughlai", "Rajasthani", "Gujarati", "South Indian"],
            answer: "Mughlai",
          },
          {
            question: "What is the primary ingredient in 'Makhan Malai'?",
            options: ["Milk cream", "Rice", "Gram flour", "Curd"],
            answer: "Milk cream",
          },
          {
            question: "Which region is famous for 'Puttu and Kadala curry'?",
            options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
            answer: "Kerala",
          },
          {
            question: "Which festival is associated with 'Thekua' preparation?",
            options: ["Chhath Puja", "Holi", "Diwali", "Navratri"],
            answer: "Chhath Puja",
          },
          {
            question: "What is the primary ingredient in 'Murukku'?",
            options: ["Rice flour", "Wheat flour", "Gram flour", "Corn flour"],
            answer: "Rice flour",
          },
          {
            question: "Which spice gives 'Rogan Josh' its distinct red color?",
            options: ["Kashmiri red chili", "Turmeric", "Coriander", "Cinnamon"],
            answer: "Kashmiri red chili",
          },
          {
            question:
              "Which Indian dessert is made by frying batter and soaking it in sugar syrup?",
            options: ["Jalebi", "Imarti", "Gulab Jamun", "Balushahi"],
            answer: "Jalebi",
          },
          {
            question: "The dish 'Dhokla' is made from?",
            options: [
              "Fermented rice and gram flour",
              "Corn flour",
              "Wheat flour",
              "Semolina",
            ],
            answer: "Fermented rice and gram flour",
          },
          {
            question: "What is the key ingredient in 'Sambar'?",
            options: ["Toor dal", "Moong dal", "Chana dal", "Urad dal"],
            answer: "Toor dal",
          },
          {
            question: "Which region is famous for 'Aloo Posto'?",
            options: ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
            answer: "West Bengal",
          },
          {
            question: "Which state is known for 'Pakhala Bhata'?",
            options: ["Odisha", "Chhattisgarh", "Jharkhand", "Bihar"],
            answer: "Odisha",
          },
          {
            question: "What is the primary ingredient in 'Thandai'?",
            options: ["Milk", "Coconut", "Curd", "Yogurt"],
            answer: "Milk",
          },
          {
            question: "Which Indian dish uses 'Methi' as its primary ingredient?",
            options: ["Methi Thepla", "Rajma", "Baigan Bharta", "Pulao"],
            answer: "Methi Thepla",
          },
          {
            question: "Which region is famous for 'Kosha Mangsho'?",
            options: ["West Bengal", "Punjab", "Rajasthan", "Bihar"],
            answer: "West Bengal",
          },
          {
            question: "What is the key ingredient in 'Bajra Roti'?",
            options: ["Pearl millet flour", "Wheat flour", "Rice flour", "Maida"],
            answer: "Pearl millet flour",
          },
          {
            question: "Which Indian bread is made with fermented dough?",
            options: ["Bhatura", "Roti", "Paratha", "Naan"],
            answer: "Bhatura",
          },
          {
            question: "What is the primary ingredient in 'Basundi'?",
            options: ["Milk", "Cream", "Coconut milk", "Condensed milk"],
            answer: "Milk",
          },
          {
            question:
              "Which Indian state is known for 'Dhuska', a deep-fried snack made from rice and chana dal?",
            options: ["Jharkhand", "Bihar", "Odisha", "Uttar Pradesh"],
            answer: "Jharkhand",
          },
          {
            question: "What is the primary ingredient in 'Sarson da Saag'?",
            options: ["Mustard leaves", "Spinach", "Fenugreek", "Colocasia leaves"],
            answer: "Mustard leaves",
          },
          {
            question: "Which spice is essential in making 'Rasam'?",
            options: ["Tamarind", "Cumin", "Black pepper", "Turmeric"],
            answer: "Tamarind",
          },
          {
            question:
              "Which dish is prepared with wheat flour and stuffed with spiced lentils?",
            options: ["Dal Baati", "Kachori", "Litti", "Pooran Poli"],
            answer: "Pooran Poli",
          },
          {
            question:
              "Which region of India is famous for 'Chhurpi', a traditional cheese?",
            options: ["Sikkim", "Assam", "Meghalaya", "Ladakh"],
            answer: "Sikkim",
          },
          {
            question:
              "Which Indian dish is made using fermented batter of rice and urad dal?",
            options: ["Idli", "Dosa", "Appam", "Uttapam"],
            answer: "Idli",
          },
          {
            question: "What is the main ingredient in 'Puran Poli'?",
            options: ["Chana dal and jaggery", "Rice flour", "Urad dal", "Moong dal"],
            answer: "Chana dal and jaggery",
          },
          {
            question:
              "Which Indian dessert is shaped like diamonds and made from cashew nuts?",
            options: ["Kaju Katli", "Barfi", "Kalakand", "Chhena Poda"],
            answer: "Kaju Katli",
          },
          {
            question: "Which dish is commonly eaten during 'Pongal' festival?",
            options: ["Ven Pongal", "Bisibele Bath", "Sambhar", "Idli"],
            answer: "Ven Pongal",
          },
          {
            question: "What is the primary ingredient in 'Chettinad Chicken'?",
            options: ["Black pepper", "Cardamom", "Cumin", "Fenugreek"],
            answer: "Black pepper",
          },
          {
            question: "Which Indian beverage is made from curd, water, and spices?",
            options: ["Chaas", "Lassi", "Thandai", "Aam Panna"],
            answer: "Chaas",
          },
          {
            question: "Which spice is used to color 'Tandoori Chicken' red?",
            options: ["Kashmiri chili", "Paprika", "Turmeric", "Cinnamon"],
            answer: "Kashmiri chili",
          },
          {
            question: "What is the primary ingredient in 'Thepla'?",
            options: ["Wheat flour", "Corn flour", "Rice flour", "Semolina"],
            answer: "Wheat flour",
          },
          {
            question:
              "Which dish is made with brinjal and spices and originated in Maharashtra?",
            options: [
              "Bharli Vangi",
              "Baingan Bharta",
              "Aloo Baingan",
              "Gutti Vankaya",
            ],
            answer: "Bharli Vangi",
          },
          {
            question:
              "Which Indian snack is prepared with flattened rice and potatoes?",
            options: ["Poha", "Bhel Puri", "Upma", "Dhokla"],
            answer: "Poha",
          },
          {
            question:
              "Which region is famous for 'Phirni', a dessert made with ground rice?",
            options: ["Punjab", "West Bengal", "Rajasthan", "Kerala"],
            answer: "Punjab",
          },
          {
            question: "Which Indian bread is made by deep-frying fermented dough?",
            options: ["Bhatura", "Paratha", "Roti", "Naan"],
            answer: "Bhatura",
          },
          {
            question: "Which festival is associated with the preparation of 'Modak'?",
            options: ["Ganesh Chaturthi", "Holi", "Diwali", "Navratri"],
            answer: "Ganesh Chaturthi",
          },
          {
            question: "What is the primary ingredient in 'Chakli'?",
            options: ["Rice flour", "Wheat flour", "Gram flour", "Corn flour"],
            answer: "Rice flour",
          },
          {
            question:
              "Which Indian spice is known for its earthy aroma and yellow color?",
            options: ["Turmeric", "Cumin", "Cardamom", "Coriander"],
            answer: "Turmeric",
          },
          {
            question: "What is the primary ingredient in 'Upma'?",
            options: ["Semolina", "Rice flour", "Gram flour", "Wheat flour"],
            answer: "Semolina",
          },
          {
            question: "Which region is famous for 'Bamboo Shoot Curry'?",
            options: ["Nagaland", "Assam", "Manipur", "Meghalaya"],
            answer: "Nagaland",
          },
          {
            question: "Which spice is used in 'Chaat Masala' for its tangy taste?",
            options: ["Amchur", "Coriander", "Turmeric", "Cumin"],
            answer: "Amchur",
          },
          {
            question: "What is the primary ingredient in 'Pulao'?",
            options: ["Rice", "Wheat", "Millet", "Corn"],
            answer: "Rice",
          },
          {
            question: "Which Indian state is famous for 'Dhokla'?",
            options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
            answer: "Gujarat",
          },
          {
            question: "Which festival is associated with 'Pitha' in Assam?",
            options: ["Bihu", "Durga Puja", "Diwali", "Navratri"],
            answer: "Bihu",
          },
          {
            question: "What is the primary ingredient in 'Appam'?",
            options: ["Rice flour", "Wheat flour", "Gram flour", "Corn flour"],
            answer: "Rice flour",
          },
          {
            question: "Which spice is commonly used in 'Chai Masala'?",
            options: ["Cardamom", "Turmeric", "Cinnamon", "Fennel"],
            answer: "Cardamom",
          },
          {
            question: "What is the main ingredient in 'Aloo Paratha'?",
            options: ["Potato", "Paneer", "Cauliflower", "Onion"],
            answer: "Potato",
          },
          {
            question: "Which festival is associated with 'Sevaiyan'?",
            options: ["Eid", "Holi", "Diwali", "Navratri"],
            answer: "Eid",
          },
          {
            question: "What is the key ingredient in 'Bhutte ka Kees'?",
            options: ["Corn", "Rice", "Gram flour", "Wheat"],
            answer: "Corn",
          },
          {
            question: "Which Indian region is famous for 'Goan Fish Curry'?",
            options: ["Goa", "Kerala", "Maharashtra", "Tamil Nadu"],
            answer: "Goa",
          },
          {
            question: "Which dish is made using raw mango and mustard seeds?",
            options: ["Aam Panna", "Chaat", "Chhunda", "Murabba"],
            answer: "Aam Panna",
          },
        ]
      },
      {
          "topic": "Literature and Language",
          "image": heritage,
          "description": "Discover the architectural wonders and cultural heritage sites of India.",
          "questionsCount": 10,
          "timeLimit": "5 min",
          "questions":
          [
            {
              question:
                "Which ancient Indian text is considered the world's oldest literary work?",
              options: ["Rigveda", "Ramayana", "Mahabharata", "Upanishads"],
              answer: "Rigveda",
            },
            {
              question: "Who is known as the 'Father of Modern Hindi Literature'?",
              options: [
                "Bharatendu Harishchandra",
                "Munshi Premchand",
                "Jaishankar Prasad",
                "Ramdhari Singh Dinkar",
              ],
              answer: "Bharatendu Harishchandra",
            },
            {
              question: "The classical Indian epic 'Mahabharata' was written by?",
              options: ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
              answer: "Vyasa",
            },
            {
              question: "Which Indian author wrote the famous novel 'Godan'?",
              options: [
                "Munshi Premchand",
                "R.K. Narayan",
                "Rabindranath Tagore",
                "Bankim Chandra Chatterjee",
              ],
              answer: "Munshi Premchand",
            },
            {
              question: "The Tamil Sangam literature belongs to which historical period?",
              options: [
                "3rd century BCE to 3rd century CE",
                "5th century BCE to 1st century BCE",
                "1st century CE to 5th century CE",
                "6th century CE to 10th century CE",
              ],
              answer: "3rd century BCE to 3rd century CE",
            },
            {
              question:
                "Which language is recognized as the classical language of India along with Sanskrit?",
              options: ["Tamil", "Telugu", "Kannada", "Malayalam"],
              answer: "Tamil",
            },
            {
              question:
                "Which Indian literary figure won the Nobel Prize for Literature in 1913?",
              options: [
                "Rabindranath Tagore",
                "Amrita Pritam",
                "R.K. Narayan",
                "Vikram Seth",
              ],
              answer: "Rabindranath Tagore",
            },
            {
              question: "The 'Tirukkural' is a famous work of literature written by?",
              options: ["Thiruvalluvar", "Ilango Adigal", "Kambar", "Avvaiyar"],
              answer: "Thiruvalluvar",
            },
            {
              question:
                "Which ancient Indian treatise is attributed to Kautilya and deals with economics and statecraft?",
              options: ["Arthashastra", "Manusmriti", "Ramayana", "Mahabharata"],
              answer: "Arthashastra",
            },
            {
              question: "The Sanskrit play 'Abhijnanasakuntalam' was written by?",
              options: ["Kalidasa", "Bhasa", "Sudraka", "Vishakhadatta"],
              answer: "Kalidasa",
            },
            {
              question: "Which Indian author wrote the book 'Train to Pakistan'?",
              options: [
                "Khushwant Singh",
                "R.K. Narayan",
                "Arundhati Roy",
                "Vikram Seth",
              ],
              answer: "Khushwant Singh",
            },
            {
              question: "The language of the Buddhist canonical texts is?",
              options: ["Pali", "Sanskrit", "Prakrit", "Tamil"],
              answer: "Pali",
            },
            {
              question: "Which Indian poet is known for the work 'Geetanjali'?",
              options: [
                "Rabindranath Tagore",
                "Bankim Chandra Chatterjee",
                "Jaishankar Prasad",
                "Subramania Bharati",
              ],
              answer: "Rabindranath Tagore",
            },
            {
              question: "Which famous Indian author wrote 'Malgudi Days'?",
              options: ["R.K. Narayan", "Ruskin Bond", "Salman Rushdie", "Chetan Bhagat"],
              answer: "R.K. Narayan",
            },
            {
              question: "The 'Tughlaq' play was written by which Indian playwright?",
              options: [
                "Girish Karnad",
                "Vijay Tendulkar",
                "Habib Tanvir",
                "Mahesh Dattani",
              ],
              answer: "Girish Karnad",
            },
            {
              question:
                "Which classical Indian language has the longest continuous literary tradition?",
              options: ["Tamil", "Sanskrit", "Pali", "Kannada"],
              answer: "Tamil",
            },
            {
              question: "Who wrote the epic poem 'Ramcharitmanas'?",
              options: ["Tulsidas", "Valmiki", "Kalidasa", "Surdas"],
              answer: "Tulsidas",
            },
            {
              question: "The 'Astadhyayi', a Sanskrit grammar treatise, was written by?",
              options: ["Panini", "Patanjali", "Chanakya", "Bhartrihari"],
              answer: "Panini",
            },
            {
              question: "Which book by Arundhati Roy won the Booker Prize in 1997?",
              options: [
                "The God of Small Things",
                "The Ministry of Utmost Happiness",
                "The Algebra of Infinite Justice",
                "The End of Imagination",
              ],
              answer: "The God of Small Things",
            },
            {
              question: "The 'Gitagovinda' is a work of literature by?",
              options: ["Jayadeva", "Kalidasa", "Tulsidas", "Chandidas"],
              answer: "Jayadeva",
            },
            {
              question: "The 'Natyashastra' is an ancient Indian treatise on?",
              options: [
                "Dramaturgy and performing arts",
                "Economics",
                "Philosophy",
                "Medicine",
              ],
              answer: "Dramaturgy and performing arts",
            },
            {
              question: "Who was the first woman to win the Jnanpith Award?",
              options: [
                "Ashapurna Devi",
                "Mahadevi Verma",
                "Amrita Pritam",
                "Mahasweta Devi",
              ],
              answer: "Ashapurna Devi",
            },
            {
              question: "The Indian language with the largest number of speakers is?",
              options: ["Hindi", "Bengali", "Telugu", "Marathi"],
              answer: "Hindi",
            },
            {
              question: "Which Indian author wrote the book 'A Suitable Boy'?",
              options: ["Vikram Seth", "Amitav Ghosh", "Chetan Bhagat", "Shashi Tharoor"],
              answer: "Vikram Seth",
            },
            {
              question: "Who is the author of the book 'The Argumentative Indian'?",
              options: [
                "Amartya Sen",
                "Shashi Tharoor",
                "Ramachandra Guha",
                "Arundhati Roy",
              ],
              answer: "Amartya Sen",
            },
            {
              question: "The Sanskrit epic 'Ramayana' is traditionally attributed to?",
              options: ["Valmiki", "Tulsidas", "Kalidasa", "Vyasa"],
              answer: "Valmiki",
            },
            {
              question: "Who wrote the book 'The Discovery of India'?",
              options: [
                "Jawaharlal Nehru",
                "Dr. B.R. Ambedkar",
                "Rabindranath Tagore",
                "Sarojini Naidu",
              ],
              answer: "Jawaharlal Nehru",
            },
            {
              question:
                "The 'Kamasutra', an ancient Indian text on love and sexuality, was written by?",
              options: ["Vatsyayana", "Kalidasa", "Kautilya", "Banabhatta"],
              answer: "Vatsyayana",
            },
            {
              question: "The Jnanpith Award is given for excellence in?",
              options: ["Literature", "Music", "Dance", "Cinema"],
              answer: "Literature",
            },
            {
              question:
                "Who is the author of the novel 'The Guide', which won the Sahitya Akademi Award?",
              options: [
                "R.K. Narayan",
                "Khushwant Singh",
                "Mulk Raj Anand",
                "Ruskin Bond",
              ],
              answer: "R.K. Narayan",
            },
            {
              question:
                "The book 'Gitanjali' by Rabindranath Tagore is originally written in which language?",
              options: ["Bengali", "Hindi", "Sanskrit", "English"],
              answer: "Bengali",
            },
            {
              question:
                "Which Sanskrit play by Kalidasa revolves around the love story of King Dushyanta and Shakuntala?",
              options: [
                "Abhijnanasakuntalam",
                "Malavikagnimitram",
                "Vikramorvashiyam",
                "Raghuvamsa",
              ],
              answer: "Abhijnanasakuntalam",
            },
            {
              question: "The 'Kural' is a collection of couplets by which Tamil poet?",
              options: ["Thiruvalluvar", "Ilango Adigal", "Kambar", "Subramania Bharati"],
              answer: "Thiruvalluvar",
            },
            {
              question: "Who is the author of the book 'India After Gandhi'?",
              options: [
                "Ramachandra Guha",
                "Shashi Tharoor",
                "Bipan Chandra",
                "William Dalrymple",
              ],
              answer: "Ramachandra Guha",
            },
            {
              question:
                "The 'Rajatarangini', a historical chronicle of Kashmir, was written by?",
              options: ["Kalhana", "Banabhatta", "Vatsyayana", "Panini"],
              answer: "Kalhana",
            },
            {
              question: "Who wrote the Hindi novel 'Gaban'?",
              options: [
                "Munshi Premchand",
                "Jaishankar Prasad",
                "Mahadevi Verma",
                "Ramdhari Singh Dinkar",
              ],
              answer: "Munshi Premchand",
            },
            {
              question:
                "Which Indian writer authored the book 'The Inheritance of Loss'?",
              options: ["Kiran Desai", "Jhumpa Lahiri", "Arundhati Roy", "Anita Desai"],
              answer: "Kiran Desai",
            },
            {
              question:
                "The 'Vikramorvashiyam' is a Sanskrit play by which classical poet?",
              options: ["Kalidasa", "Bhasa", "Sudraka", "Vishakhadatta"],
              answer: "Kalidasa",
            },
            {
              question: "The language spoken by Lord Buddha in his discourses was?",
              options: ["Pali", "Sanskrit", "Prakrit", "Magadhi"],
              answer: "Pali",
            },
            {
              question:
                "Who was the first recipient of the Sahitya Akademi Award in Hindi literature?",
              options: [
                "Makhanlal Chaturvedi",
                "Ramdhari Singh Dinkar",
                "Harivansh Rai Bachchan",
                "Jaishankar Prasad",
              ],
              answer: "Makhanlal Chaturvedi",
            },
            {
              question:
                "The book 'Train to Pakistan' is based on which historical event?",
              options: [
                "Partition of India",
                "Jallianwala Bagh massacre",
                "Sepoy Mutiny",
                "Quit India Movement",
              ],
              answer: "Partition of India",
            },
            {
              question: "Who wrote the Kannada epic 'Kavirajamarga'?",
              options: ["Amoghavarsha", "Ranna", "Pampa", "Vijayananda"],
              answer: "Amoghavarsha",
            },
            {
              question: "The 'Kamasutra' was written by?",
              options: ["Vatsyayana", "Chanakya", "Kalidasa", "Kautilya"],
              answer: "Vatsyayana",
            },
            {
              question: "Which Indian poet is known for the poem 'Madhushala'?",
              options: [
                "Harivansh Rai Bachchan",
                "Ramdhari Singh Dinkar",
                "Subhadra Kumari Chauhan",
                "Mahadevi Verma",
              ],
              answer: "Harivansh Rai Bachchan",
            },
            {
              question: "The 'Silappatikaram' is an ancient Tamil epic written by?",
              options: ["Ilango Adigal", "Kambar", "Thiruvalluvar", "Subramania Bharati"],
              answer: "Ilango Adigal",
            },
            {
              question: "The book 'The Shadow Lines' is written by?",
              options: ["Amitav Ghosh", "Arundhati Roy", "Jhumpa Lahiri", "Vikram Seth"],
              answer: "Amitav Ghosh",
            },
            {
              question: "The 'Jnanpith Award' is given for excellence in which field?",
              options: ["Literature", "Music", "Dance", "Theatre"],
              answer: "Literature",
            },
            {
              question: "The epic 'Ramayana' was originally written in?",
              options: ["Sanskrit", "Tamil", "Pali", "Prakrit"],
              answer: "Sanskrit",
            },
            {
              question: "The 'Sanskrit Grammar' was authored by?",
              options: ["Panini", "Bhartrihari", "Patanjali", "Chanakya"],
              answer: "Panini",
            },
            {
              question: "The book 'The Namesake' was written by?",
              options: ["Jhumpa Lahiri", "Kiran Desai", "Salman Rushdie", "Vikram Seth"],
              answer: "Jhumpa Lahiri",
            },
            {
              question: "The 'Gulistan' and 'Bustan' are literary works of?",
              options: ["Sheikh Saadi", "Amir Khusrow", "Mirza Ghalib", "Kabir"],
              answer: "Sheikh Saadi",
            },
            {
              question: "The 'Panchatantra' was originally written in which language?",
              options: ["Sanskrit", "Prakrit", "Pali", "Tamil"],
              answer: "Sanskrit",
            },
            {
              question: "The book 'The Palace of Illusions' is based on which epic?",
              options: ["Mahabharata", "Ramayana", "Bhagavad Gita", "Rigveda"],
              answer: "Mahabharata",
            },
            {
              question: "Who wrote the Hindi novel 'Raag Darbari'?",
              options: ["Shri Lal Shukla", "Nirmal Verma", "Bhisham Sahni", "Kamleshwar"],
              answer: "Shri Lal Shukla",
            },
            {
              question:
                "The language in which the ancient Indian text 'Ashtadhyayi' is written?",
              options: ["Sanskrit", "Prakrit", "Pali", "Magadhi"],
              answer: "Sanskrit",
            },
            {
              question:
                "The famous line 'A thing of beauty is a joy forever' is written by?",
              options: [
                "John Keats",
                "William Wordsworth",
                "Rabindranath Tagore",
                "T.S. Eliot",
              ],
              answer: "John Keats",
            },
            {
              question: "Who wrote the Tamil epic 'Manimekalai'?",
              options: [
                "Seethalai Sathanar",
                "Ilango Adigal",
                "Kambar",
                "Subramania Bharati",
              ],
              answer: "Seethalai Sathanar",
            },
            {
              question: "Who wrote the play 'Sakuntalam'?",
              options: ["Kalidasa", "Bhasa", "Sudraka", "Vishakhadatta"],
              answer: "Kalidasa",
            },
            {
              question:
                "Who is the author of the book 'Shadow of the Great Game: The Untold Story of India's Partition'?",
              options: [
                "Narendra Singh Sarila",
                "Ramachandra Guha",
                "William Dalrymple",
                "Khushwant Singh",
              ],
              answer: "Narendra Singh Sarila",
            },
            {
              question:
                "Which ancient Indian text contains the concept of 'Dharma' and its duties?",
              options: ["Manusmriti", "Upanishads", "Ramayana", "Mahabharata"],
              answer: "Manusmriti",
            },
            {
              question: "The book 'A Passage to India' was written by?",
              options: ["E.M. Forster", "R.K. Narayan", "V.S. Naipaul", "Salman Rushdie"],
              answer: "E.M. Forster",
            },
            {
              question: "Which famous Tamil poet composed the epic 'Kamba Ramayanam'?",
              options: ["Kambar", "Thiruvalluvar", "Subramania Bharati", "Ilango Adigal"],
              answer: "Kambar",
            },
            {
              question: "The book 'Freedom at Midnight' was co-authored by?",
              options: [
                "Larry Collins and Dominique Lapierre",
                "William Dalrymple and Anita Anand",
                "Ramachandra Guha and Shashi Tharoor",
                "Mark Tully and Satish Jacob",
              ],
              answer: "Larry Collins and Dominique Lapierre",
            },
            {
              question: "Who was the first Indian to receive the Sahitya Akademi Award?",
              options: [
                "R.K. Narayan",
                "Usha Mehta",
                "Makhanlal Chaturvedi",
                "Harivansh Rai Bachchan",
              ],
              answer: "Makhanlal Chaturvedi",
            },
            {
              question:
                "Which Indian author wrote 'Midnight's Children', which won the Booker Prize?",
              options: [
                "Salman Rushdie",
                "V.S. Naipaul",
                "Amitav Ghosh",
                "Arundhati Roy",
              ],
              answer: "Salman Rushdie",
            },
            {
              question: "The 'Puranas' are ancient Indian texts primarily focused on?",
              options: [
                "Mythology and History",
                "Philosophy",
                "Grammar and Linguistics",
                "Mathematics",
              ],
              answer: "Mythology and History",
            },
            {
              question: "The book 'The White Tiger' by Aravind Adiga won which award?",
              options: [
                "Man Booker Prize",
                "Pulitzer Prize",
                "Jnanpith Award",
                "Sahitya Akademi Award",
              ],
              answer: "Man Booker Prize",
            },
            {
              question: "Who wrote the Hindi play 'Andha Yug'?",
              options: [
                "Dharamvir Bharati",
                "Bharatendu Harishchandra",
                "Girish Karnad",
                "Jaishankar Prasad",
              ],
              answer: "Dharamvir Bharati",
            },
            {
              question: "The 'Mrichchhakatika' (The Little Clay Cart) was written by?",
              options: ["Sudraka", "Bhasa", "Kalidasa", "Vishakhadatta"],
              answer: "Sudraka",
            },
            {
              question:
                "The 'Jataka Tales' are associated with which religious tradition?",
              options: ["Buddhism", "Jainism", "Hinduism", "Zoroastrianism"],
              answer: "Buddhism",
            },
            {
              question: "The 'Kathasaritsagara' is a famous collection of?",
              options: [
                "Fables and stories",
                "Religious hymns",
                "Philosophical texts",
                "Historical chronicles",
              ],
              answer: "Fables and stories",
            },
            {
              question: "The 'Ain-i-Akbari' was written by?",
              options: ["Abul Fazl", "Badauni", "Birbal", "Al-Biruni"],
              answer: "Abul Fazl",
            },
            {
              question:
                "Which Indian poet is known for the patriotic poem 'Jhansi Ki Rani'?",
              options: [
                "Subhadra Kumari Chauhan",
                "Mahadevi Verma",
                "Ramdhari Singh Dinkar",
                "Harivansh Rai Bachchan",
              ],
              answer: "Subhadra Kumari Chauhan",
            },
            {
              question: "The 'Kalika Purana' is associated with which deity?",
              options: ["Goddess Kali", "Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
              answer: "Goddess Kali",
            },
            {
              question: "Which language was used by Kabir for his writings?",
              options: ["Awadhi", "Braj Bhasha", "Hindi", "Urdu"],
              answer: "Awadhi",
            },
            {
              question:
                "The 'Dasakumaracharita' is an ancient Sanskrit prose romance by?",
              options: ["Dandin", "Bhasa", "Sudraka", "Kalidasa"],
              answer: "Dandin",
            },
            {
              question: "Which Indian author wrote the book 'The Immortals of Meluha'?",
              options: [
                "Amish Tripathi",
                "Chetan Bhagat",
                "Anuja Chauhan",
                "Durjoy Datta",
              ],
              answer: "Amish Tripathi",
            },
            {
              question: "The 'Bhagavad Gita' is a part of which epic?",
              options: ["Mahabharata", "Ramayana", "Upanishads", "Vedas"],
              answer: "Mahabharata",
            },
            {
              question: "The famous novel 'God of Small Things' was written by?",
              options: ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Anita Desai"],
              answer: "Arundhati Roy",
            },
            {
              question: "The book 'India Wins Freedom' was authored by?",
              options: [
                "Maulana Abul Kalam Azad",
                "Jawaharlal Nehru",
                "Dr. B.R. Ambedkar",
                "Sardar Patel",
              ],
              answer: "Maulana Abul Kalam Azad",
            },
            {
              question: "Who is the author of the book 'Train to Pakistan'?",
              options: [
                "Khushwant Singh",
                "Salman Rushdie",
                "R.K. Narayan",
                "Vikram Seth",
              ],
              answer: "Khushwant Singh",
            },
            {
              question: "The 'Hitopadesha' is a collection of?",
              options: [
                "Fables",
                "Religious texts",
                "Historical records",
                "Scientific treatises",
              ],
              answer: "Fables",
            },
            {
              question: "The 'Charaka Samhita' is an ancient Indian text on?",
              options: ["Medicine", "Mathematics", "Astronomy", "Grammar"],
              answer: "Medicine",
            },
            {
              question: "The book 'The Argumentative Indian' was written by?",
              options: [
                "Amartya Sen",
                "Ramachandra Guha",
                "Shashi Tharoor",
                "Pavan K. Varma",
              ],
              answer: "Amartya Sen",
            },
            {
              question: "Who wrote the epic poem 'Raghuvamsa'?",
              options: ["Kalidasa", "Bhartrihari", "Bhasa", "Sudraka"],
              answer: "Kalidasa",
            },
            {
              question: "The 'Bhavabhuti' was a famous playwright in which language?",
              options: ["Sanskrit", "Tamil", "Pali", "Prakrit"],
              answer: "Sanskrit",
            },
            {
              question: "The book 'I Too Had a Love Story' was written by?",
              options: [
                "Ravinder Singh",
                "Chetan Bhagat",
                "Durjoy Datta",
                "Amish Tripathi",
              ],
              answer: "Ravinder Singh",
            },
            {
              question:
                "Who wrote the novel 'Kanthapura', which portrays the impact of Gandhian philosophy on rural India?",
              options: ["Raja Rao", "R.K. Narayan", "Mulk Raj Anand", "Khushwant Singh"],
              answer: "Raja Rao",
            },
            {
              question: "The 'Gul-e-Bakavali' is a famous Urdu poem written by?",
              options: [
                "Mir Taqi Mir",
                "Mirza Ghalib",
                "Nazeer Akbarabadi",
                "Daya Shankar Kaul Nasim",
              ],
              answer: "Daya Shankar Kaul Nasim",
            },
            {
              question: "Who was the first female recipient of the Jnanpith Award?",
              options: [
                "Ashapurna Devi",
                "Mahadevi Verma",
                "Amrita Pritam",
                "Subhadra Kumari Chauhan",
              ],
              answer: "Ashapurna Devi",
            },
            {
              question: "The 'Harivamsa' is considered an appendix to which epic?",
              options: ["Mahabharata", "Ramayana", "Upanishads", "Vedas"],
              answer: "Mahabharata",
            },
            {
              question: "The book 'Sea of Poppies' was authored by?",
              options: ["Amitav Ghosh", "Vikram Seth", "Arundhati Roy", "Salman Rushdie"],
              answer: "Amitav Ghosh",
            },
            {
              question: "Which Indian author wrote 'The Glass Palace'?",
              options: ["Amitav Ghosh", "Jhumpa Lahiri", "Arundhati Roy", "Kiran Desai"],
              answer: "Amitav Ghosh",
            },
            {
              question: "The 'Kathopanishad' is part of which larger collection?",
              options: ["Upanishads", "Vedas", "Puranas", "Smritis"],
              answer: "Upanishads",
            },
            {
              question: "The 'Taittiriya Upanishad' belongs to which Veda?",
              options: ["Yajurveda", "Rigveda", "Samaveda", "Atharvaveda"],
              answer: "Yajurveda",
            },
            {
              question: "The book 'The Man-Eater of Malgudi' was written by?",
              options: [
                "R.K. Narayan",
                "Salman Rushdie",
                "Amitav Ghosh",
                "Jhumpa Lahiri",
              ],
              answer: "R.K. Narayan",
            },
            {
              question: "The 'Abhijnanasakuntalam' is a famous play written by?",
              options: ["Kalidasa", "Bhasa", "Sudraka", "Vishakhadatta"],
              answer: "Kalidasa",
            },
            {
              question: "The book 'The Lowland' was written by?",
              options: ["Jhumpa Lahiri", "Kiran Desai", "Vikram Seth", "Arundhati Roy"],
              answer: "Jhumpa Lahiri",
            },
            {
              question: "Which ancient Tamil text is part of the 'Five Great Epics'?",
              options: [
                "Silappatikaram",
                "Thirukkural",
                "Kamba Ramayanam",
                "Manimekalai",
              ],
              answer: "Silappatikaram",
            },
            {
              question:
                "Who wrote the Marathi novel 'Yayati', which won the Jnanpith Award?",
              options: ["V.S. Khandekar", "P.L. Deshpande", "Baba Amte", "Namdeo Dhasal"],
              answer: "V.S. Khandekar",
            },
            {
              question: "The book 'The Great Indian Novel' is authored by?",
              options: [
                "Shashi Tharoor",
                "Amartya Sen",
                "Ramachandra Guha",
                "Vikram Seth",
              ],
              answer: "Shashi Tharoor",
            },
            {
              question: "The 'Sursagar' is a composition by which poet?",
              options: ["Surdas", "Kabir", "Tulsidas", "Mirabai"],
              answer: "Surdas",
            },
            {
              question: "The book 'Interpreter of Maladies' was written by?",
              options: ["Jhumpa Lahiri", "Arundhati Roy", "Anita Desai", "Kiran Desai"],
              answer: "Jhumpa Lahiri",
            },
            {
              question:
                "Which ancient Indian text is based on the teachings of Lord Mahavira?",
              options: ["Jain Agamas", "Vedas", "Puranas", "Upanishads"],
              answer: "Jain Agamas",
            },
            {
              question:
                "The book 'The Story of My Experiments with Truth' is the autobiography of?",
              options: [
                "Mahatma Gandhi",
                "Jawaharlal Nehru",
                "B.R. Ambedkar",
                "Subhash Chandra Bose",
              ],
              answer: "Mahatma Gandhi",
            },
            {
              question: "The book 'The Namesake' was written by?",
              options: [
                "Jhumpa Lahiri",
                "Arundhati Roy",
                "Kiran Desai",
                "Salman Rushdie",
              ],
              answer: "Jhumpa Lahiri",
            },
            {
              question: "Who is the author of the Hindi novel 'Maila Anchal'?",
              options: [
                "Phanishwar Nath Renu",
                "Munshi Premchand",
                "Ramdhari Singh Dinkar",
                "Jaishankar Prasad",
              ],
              answer: "Phanishwar Nath Renu",
            },
            {
              question: "The famous Kannada novel 'Samskara' was written by?",
              options: [
                "U.R. Ananthamurthy",
                "Shivarama Karanth",
                "Kuvempu",
                "Giriraj Kishore",
              ],
              answer: "U.R. Ananthamurthy",
            },
            {
              question: "The book 'The Hungry Tide' is written by?",
              options: ["Amitav Ghosh", "Vikram Seth", "Arundhati Roy", "Jhumpa Lahiri"],
              answer: "Amitav Ghosh",
            },
            {
              question: "The 'Amuktamalyada' is a Telugu epic poem composed by?",
              options: ["Krishnadevaraya", "Nannaya", "Tikkana", "Yerrapragada"],
              answer: "Krishnadevaraya",
            },
            {
              question: "The book 'The Algebra of Infinite Justice' was written by?",
              options: ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Amitav Ghosh"],
              answer: "Arundhati Roy",
            },
            {
              question: "The 'Bhakti movement' in literature was started by?",
              options: ["Ramanuja", "Kabir", "Tulsidas", "Mirabai"],
              answer: "Ramanuja",
            },
            {
              question: "The 'Lilavati' is a mathematical text written by?",
              options: ["Bhaskaracharya", "Aryabhata", "Brahmagupta", "Varahamihira"],
              answer: "Bhaskaracharya",
            },
            {
              question: "The 'Prithviraj Raso' was composed by?",
              options: ["Chand Bardai", "Kalidasa", "Bhasa", "Surdas"],
              answer: "Chand Bardai",
            },
            {
              question: "Which Indian author wrote 'The Suitable Boy'?",
              options: [
                "Vikram Seth",
                "Amitav Ghosh",
                "Arundhati Roy",
                "Khushwant Singh",
              ],
              answer: "Vikram Seth",
            },
            {
              question: "The 'Vikram Samvat' is associated with which historical figure?",
              options: ["King Vikramaditya", "Ashoka", "Chandragupta Maurya", "Harsha"],
              answer: "King Vikramaditya",
            },
          ]
        },
        {
            "topic": "Social and Cast Structure",
            "image": heritage,
            "description": "Discover the architectural wonders and cultural heritage sites of India.",
            "questionsCount": 10,
            "timeLimit": "5 min",
            "questions":
            [
              {
                question:
                  "Which ancient text is considered the primary source of the Varna system in India?",
                options: ["Rigveda", "Yajurveda", "Manusmriti", "Upanishads"],
                answer: "Manusmriti",
              },
              {
                question: "The 'jati' system in India is most closely associated with?",
                options: [
                  "Social stratification",
                  "Religious rituals",
                  "Economic activities",
                  "Political divisions",
                ],
                answer: "Social stratification",
              },
              {
                question:
                  "Which term refers to the caste-based occupation in traditional Indian society?",
                options: ["Jajmani", "Brahmacharya", "Karma", "Gotra"],
                answer: "Jajmani",
              },
              {
                question: "The term 'varna' in the Indian caste system refers to?",
                options: ["Color", "Occupation", "Wealth", "Religion"],
                answer: "Color",
              },
              {
                question:
                  "Which of the following is NOT one of the four Varnas in the traditional caste system?",
                options: ["Brahmins", "Kshatriyas", "Vaishyas", "Shudras"],
                answer: "Shudras",
              },
              {
                question:
                  "The practice of 'untouchability' was officially abolished by which Article of the Indian Constitution?",
                options: ["Article 15", "Article 17", "Article 21", "Article 25"],
                answer: "Article 17",
              },
              {
                question:
                  "Which social reformer led the anti-caste movement in Maharashtra?",
                options: ["Jyotirao Phule", "Raja Ram Mohan Roy", "Periyar", "Ambedkar"],
                answer: "Jyotirao Phule",
              },
              {
                question: "What does 'Dalit' mean in the context of Indian society?",
                options: ["Oppressed", "Privileged", "Landowner", "Warrior"],
                answer: "Oppressed",
              },
              {
                question: "The 'Brahmo Samaj' was founded by?",
                options: [
                  "Raja Ram Mohan Roy",
                  "Swami Vivekananda",
                  "Dayanand Saraswati",
                  "Gopal Krishna Gokhale",
                ],
                answer: "Raja Ram Mohan Roy",
              },
              {
                question: "The 'Justice Party' in colonial India was associated with?",
                options: [
                  "Anti-Brahmin movement",
                  "Pro-Independence struggle",
                  "Muslim League",
                  "Congress Party",
                ],
                answer: "Anti-Brahmin movement",
              },
              {
                question: "The term 'Savarna' refers to which group in the caste system?",
                options: [
                  "Upper caste groups",
                  "Backward classes",
                  "Untouchables",
                  "Tribals",
                ],
                answer: "Upper caste groups",
              },
              {
                question:
                  "Which Indian state has the highest population of Scheduled Castes?",
                options: ["Uttar Pradesh", "Bihar", "West Bengal", "Rajasthan"],
                answer: "Uttar Pradesh",
              },
              {
                question:
                  "Which leader played a significant role in the Dalit rights movement in India?",
                options: [
                  "B. R. Ambedkar",
                  "Jawaharlal Nehru",
                  "Lal Bahadur Shastri",
                  "Bal Gangadhar Tilak",
                ],
                answer: "B. R. Ambedkar",
              },
              {
                question:
                  "What was the main objective of the 'Self-Respect Movement' led by Periyar?",
                options: [
                  "Abolition of caste",
                  "Promotion of Hinduism",
                  "Increase in Brahmin rights",
                  "Colonial cooperation",
                ],
                answer: "Abolition of caste",
              },
              {
                question: "The Mandal Commission was formed to address?",
                options: [
                  "Caste-based reservations",
                  "Religious freedom",
                  "Land reforms",
                  "Minority rights",
                ],
                answer: "Caste-based reservations",
              },
              {
                question: "What does 'jati panchayat' refer to?",
                options: [
                  "Caste council",
                  "Village committee",
                  "Religious assembly",
                  "Trade union",
                ],
                answer: "Caste council",
              },
              {
                question:
                  "Which social reformer fought against child marriage and caste discrimination?",
                options: [
                  "Ishwar Chandra Vidyasagar",
                  "Mahatma Gandhi",
                  "Lala Lajpat Rai",
                  "Dadabhai Naoroji",
                ],
                answer: "Ishwar Chandra Vidyasagar",
              },
              {
                question:
                  "The caste system in India was formally challenged by the Constitution in?",
                options: ["1950", "1947", "1962", "1971"],
                answer: "1950",
              },
              {
                question: "The 'Poona Pact' of 1932 was signed between?",
                options: [
                  "B. R. Ambedkar and Mahatma Gandhi",
                  "Nehru and Patel",
                  "Rajendra Prasad and Jinnah",
                  "Sarojini Naidu and Tilak",
                ],
                answer: "B. R. Ambedkar and Mahatma Gandhi",
              },
              {
                question:
                  "Which reformer was the first to burn the Manusmriti as a protest against caste discrimination?",
                options: [
                  "B. R. Ambedkar",
                  "Periyar",
                  "Jyotirao Phule",
                  "Swami Vivekananda",
                ],
                answer: "B. R. Ambedkar",
              },
              {
                question:
                  "Which state implemented the first caste-based reservation system in India?",
                options: ["Tamil Nadu", "Maharashtra", "Karnataka", "Andhra Pradesh"],
                answer: "Tamil Nadu",
              },
              {
                question: "The term 'backward classes' refers to?",
                options: [
                  "Socially and educationally disadvantaged groups",
                  "Economically wealthy classes",
                  "Religious minorities",
                  "Tribal populations",
                ],
                answer: "Socially and educationally disadvantaged groups",
              },
              {
                question:
                  "The 'Chaturvarna' system originally consisted of how many castes?",
                options: ["Four", "Five", "Six", "Three"],
                answer: "Four",
              },
              {
                question: "The 'Ezhava' community is predominant in which Indian state?",
                options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
                answer: "Kerala",
              },
              {
                question: "The 'Adi Dravida' is a caste group primarily found in?",
                options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
                answer: "Tamil Nadu",
              },
              {
                question: "The 'Bhakti Movement' contributed to?",
                options: [
                  "Challenging caste hierarchy",
                  "Promoting Brahmin supremacy",
                  "Strengthening untouchability",
                  "Advocating religious conversion",
                ],
                answer: "Challenging caste hierarchy",
              },
              {
                question: "The 'Bhangi' community traditionally engaged in?",
                options: [
                  "Sanitation work",
                  "Agriculture",
                  "Priestly duties",
                  "Trade activities",
                ],
                answer: "Sanitation work",
              },
              {
                question:
                  "Which Act of 1989 aimed at preventing atrocities against Scheduled Castes and Tribes?",
                options: [
                  "SC/ST Prevention of Atrocities Act",
                  "Protection of Civil Rights Act",
                  "Reservation Act",
                  "Anti-Untouchability Act",
                ],
                answer: "SC/ST Prevention of Atrocities Act",
              },
              {
                question: "The 'Harijan' term was popularized by?",
                options: [
                  "Mahatma Gandhi",
                  "B. R. Ambedkar",
                  "Jawaharlal Nehru",
                  "Bal Gangadhar Tilak",
                ],
                answer: "Mahatma Gandhi",
              },
              {
                question:
                  "Which Indian leader championed the cause of caste annihilation through his work 'Annihilation of Caste'?",
                options: ["B. R. Ambedkar", "Mahatma Gandhi", "Periyar", "Jyotirao Phule"],
                answer: "B. R. Ambedkar",
              },
              {
                question: "The 'Scheduled Castes Federation' was founded by?",
                options: [
                  "B. R. Ambedkar",
                  "Periyar",
                  "Lala Lajpat Rai",
                  "Raja Ram Mohan Roy",
                ],
                answer: "B. R. Ambedkar",
              },
              {
                question:
                  "The 'Kayastha' community in India was traditionally associated with?",
                options: [
                  "Administration and record-keeping",
                  "Agriculture",
                  "Military service",
                  "Trade",
                ],
                answer: "Administration and record-keeping",
              },
              {
                question:
                  "Which social reformer led the Vaikom Satyagraha against untouchability in Kerala?",
                options: ["K. Kelappan", "Sree Narayana Guru", "Periyar", "Gandhi"],
                answer: "Sree Narayana Guru",
              },
              {
                question:
                  "The 'Gulabi Gang' is a women’s rights group fighting against caste-based violence in?",
                options: ["Uttar Pradesh", "Bihar", "Rajasthan", "Madhya Pradesh"],
                answer: "Uttar Pradesh",
              },
              {
                question:
                  "The 'Khap Panchayat' is most commonly associated with which Indian region?",
                options: ["Haryana", "Kerala", "West Bengal", "Assam"],
                answer: "Haryana",
              },
              {
                question:
                  "Which social reformer founded the 'Satyashodhak Samaj' to promote caste equality?",
                options: [
                  "Jyotirao Phule",
                  "Raja Ram Mohan Roy",
                  "B. R. Ambedkar",
                  "Periyar",
                ],
                answer: "Jyotirao Phule",
              },
              {
                question:
                  "The 'Bhangi' community is traditionally associated with which occupation?",
                options: ["Sanitation work", "Weaving", "Farming", "Priestly duties"],
                answer: "Sanitation work",
              },
              {
                question: "The 'Manusmriti' supports which form of social division?",
                options: [
                  "Varna system",
                  "Class system",
                  "Religious hierarchy",
                  "Ethnic grouping",
                ],
                answer: "Varna system",
              },
              {
                question:
                  "The 'Chamars' belong to which category in the Indian caste system?",
                options: ["Scheduled Castes", "OBC", "General", "Scheduled Tribes"],
                answer: "Scheduled Castes",
              },
              {
                question: "The term 'Shudra' in the Varna system refers to?",
                options: [
                  "Laborers and service providers",
                  "Priests",
                  "Warriors",
                  "Merchants",
                ],
                answer: "Laborers and service providers",
              },
              {
                question:
                  "The 'Nadar' community of Tamil Nadu was traditionally associated with?",
                options: ["Toddy tapping", "Carpentry", "Farming", "Trading"],
                answer: "Toddy tapping",
              },
              {
                question: "The 'Brahmo Samaj' sought to abolish which practice?",
                options: [
                  "Caste discrimination",
                  "Child marriage",
                  "Sati",
                  "Untouchability",
                ],
                answer: "Caste discrimination",
              },
              {
                question: "Which caste group is associated with the 'Jajmani system'?",
                options: [
                  "Landowning castes",
                  "Service-providing castes",
                  "Priestly castes",
                  "Warrior castes",
                ],
                answer: "Service-providing castes",
              },
              {
                question: "The 'Nadars' in Tamil Nadu were historically considered?",
                options: ["Lower caste", "Middle caste", "Upper caste", "Tribal group"],
                answer: "Lower caste",
              },
              {
                question:
                  "Which constitutional amendment provided for the reservation of OBCs in educational institutions?",
                options: [
                  "93rd Amendment",
                  "44th Amendment",
                  "73rd Amendment",
                  "52nd Amendment",
                ],
                answer: "93rd Amendment",
              },
              {
                question:
                  "Which Article of the Indian Constitution deals with the promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes, and Other Backward Classes?",
                options: ["Article 46", "Article 21", "Article 15", "Article 25"],
                answer: "Article 46",
              },
              {
                question: "The term 'Dominant caste' was coined by?",
                options: ["M. N. Srinivas", "G. S. Ghurye", "B. R. Ambedkar", "Periyar"],
                answer: "M. N. Srinivas",
              },
              {
                question:
                  "The 'Patidars' community is primarily associated with which Indian state?",
                options: ["Gujarat", "Madhya Pradesh", "Rajasthan", "Punjab"],
                answer: "Gujarat",
              },
              {
                question:
                  "The 'Devadasi' system, a caste-based practice, was associated with?",
                options: ["Temple dancers", "Pottery work", "Agriculture", "Metalwork"],
                answer: "Temple dancers",
              },
              {
                question: "The 'Backward Classes Movement' in India was led by?",
                options: [
                  "Periyar",
                  "B. R. Ambedkar",
                  "Raja Ram Mohan Roy",
                  "Swami Vivekananda",
                ],
                answer: "Periyar",
              },
              {
                question: "The 'SC/ST Prevention of Atrocities Act' was introduced in?",
                options: ["1989", "1976", "1995", "2001"],
                answer: "1989",
              },
              {
                question: "The 'Kayastha' community is traditionally known for?",
                options: [
                  "Clerical and administrative roles",
                  "Agriculture",
                  "Temple priesthood",
                  "Handicrafts",
                ],
                answer: "Clerical and administrative roles",
              },
              {
                question: "The 'Mandal Commission' recommended?",
                options: [
                  "27% reservation for OBCs",
                  "Abolition of caste",
                  "Land reforms",
                  "Women’s reservation",
                ],
                answer: "27% reservation for OBCs",
              },
              {
                question: "The 'Chaturvarna' system originated in which text?",
                options: ["Rigveda", "Yajurveda", "Upanishads", "Manusmriti"],
                answer: "Rigveda",
              },
              {
                question: "The 'Ezhavas' are a prominent community in?",
                options: ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra"],
                answer: "Kerala",
              },
              {
                question: "The 'Jat' community is dominant in which region?",
                options: [
                  "Punjab and Haryana",
                  "Kerala and Tamil Nadu",
                  "Bihar and Jharkhand",
                  "Gujarat and Rajasthan",
                ],
                answer: "Punjab and Haryana",
              },
              {
                question:
                  "Which caste-based practice was officially banned under the Protection of Civil Rights Act, 1955?",
                options: [
                  "Untouchability",
                  "Child marriage",
                  "Temple entry restriction",
                  "Dowry",
                ],
                answer: "Untouchability",
              },
              {
                question:
                  "The 'Scheduled Tribes' (STs) are defined under which Article of the Indian Constitution?",
                options: ["Article 342", "Article 335", "Article 326", "Article 356"],
                answer: "Article 342",
              },
              {
                question: "The 'Khairlanji Massacre' of 2006 was an example of?",
                options: [
                  "Caste-based violence",
                  "Communal riot",
                  "Labor strike",
                  "Political assassination",
                ],
                answer: "Caste-based violence",
              },
              {
                question:
                  "The 'Bhils', classified as a Scheduled Tribe, are primarily found in?",
                options: [
                  "Rajasthan and Madhya Pradesh",
                  "Kerala and Tamil Nadu",
                  "Bihar and Jharkhand",
                  "Punjab and Haryana",
                ],
                answer: "Rajasthan and Madhya Pradesh",
              },
              {
                question: "The 'Adi Dravida' community is predominantly found in?",
                options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
                answer: "Tamil Nadu",
              },
              {
                question:
                  "The 'Kshatriya' caste in the Varna system was traditionally associated with?",
                options: [
                  "Warrior duties",
                  "Trade and commerce",
                  "Priestly activities",
                  "Agriculture",
                ],
                answer: "Warrior duties",
              },
              {
                question:
                  "Which constitutional provision provides for the promotion of the educational and economic interests of Scheduled Castes and Scheduled Tribes?",
                options: ["Article 46", "Article 15", "Article 29", "Article 32"],
                answer: "Article 46",
              },
              {
                question: "The 'Bharatiya Dalit Panthers' was inspired by which movement?",
                options: [
                  "Black Panther movement in the US",
                  "Civil Rights Movement",
                  "Communist movement",
                  "Indian National Congress",
                ],
                answer: "Black Panther movement in the US",
              },
              {
                question: "The 'Backward Classes Commission' was headed by?",
                options: [
                  "B. P. Mandal",
                  "Kaka Kalelkar",
                  "Lal Bahadur Shastri",
                  "M. N. Srinivas",
                ],
                answer: "B. P. Mandal",
              },
              {
                question: "The 'Gond' tribe is predominantly found in?",
                options: [
                  "Madhya Pradesh and Chhattisgarh",
                  "Tamil Nadu and Kerala",
                  "Assam and Nagaland",
                  "Punjab and Haryana",
                ],
                answer: "Madhya Pradesh and Chhattisgarh",
              },
              {
                question: "The 'Satnami' sect was founded by?",
                options: [
                  "Ghasidas",
                  "Guru Nanak",
                  "Raja Ram Mohan Roy",
                  "Swami Vivekananda",
                ],
                answer: "Ghasidas",
              },
              {
                question:
                  "Which movement sought to eradicate caste-based discrimination in Maharashtra?",
                options: [
                  "Dalit Panthers",
                  "Satnami Rebellion",
                  "Brahmo Samaj",
                  "Narmada Bachao Andolan",
                ],
                answer: "Dalit Panthers",
              },
              {
                question: "Which constitutional article abolished untouchability?",
                options: ["Article 17", "Article 15", "Article 21", "Article 25"],
                answer: "Article 17",
              },
              {
                question:
                  "Which leader was known for his role in the anti-Brahmin movement in Tamil Nadu?",
                options: [
                  "Periyar E. V. Ramasamy",
                  "B. R. Ambedkar",
                  "Jyotirao Phule",
                  "Raja Ram Mohan Roy",
                ],
                answer: "Periyar E. V. Ramasamy",
              },
              {
                question: "The 'Bhakti Movement' challenged?",
                options: [
                  "Caste discrimination",
                  "British rule",
                  "Colonial exploitation",
                  "Tribal autonomy",
                ],
                answer: "Caste discrimination",
              },
              {
                question: "The 'Mahad Satyagraha' led by B. R. Ambedkar was aimed at?",
                options: [
                  "Access to public water tanks for Dalits",
                  "Temple entry rights",
                  "Abolition of child marriage",
                  "Land rights",
                ],
                answer: "Access to public water tanks for Dalits",
              },
              {
                question: "Which ancient Indian law text justified caste discrimination?",
                options: ["Manusmriti", "Arthashastra", "Ramayana", "Mahabharata"],
                answer: "Manusmriti",
              },
              {
                question: "The 'Bhangi Mukti Morcha' fought for the rights of?",
                options: ["Sanitation workers", "Farmers", "Teachers", "Factory workers"],
                answer: "Sanitation workers",
              },
              {
                question: "The 'Chamar' community primarily engaged in?",
                options: ["Leather work", "Agriculture", "Pottery", "Weaving"],
                answer: "Leather work",
              },
              {
                question: "The 'Khap Panchayats' in North India are known for?",
                options: [
                  "Enforcing caste norms",
                  "Promoting women's rights",
                  "Protecting religious freedom",
                  "Judicial reforms",
                ],
                answer: "Enforcing caste norms",
              },
              {
                question: "The 'Pasi' community is classified as?",
                options: ["Scheduled Caste", "OBC", "General", "Scheduled Tribe"],
                answer: "Scheduled Caste",
              },
              {
                question: "The 'Namasudra' community is mainly found in?",
                options: ["West Bengal", "Tamil Nadu", "Kerala", "Rajasthan"],
                answer: "West Bengal",
              },
              {
                question: "Which act ensures protection against caste-based atrocities?",
                options: [
                  "SC/ST Prevention of Atrocities Act",
                  "Protection of Civil Rights Act",
                  "Hindu Code Bill",
                  "Dowry Prohibition Act",
                ],
                answer: "SC/ST Prevention of Atrocities Act",
              },
              {
                question: "The 'Kurmi' community is dominant in which region?",
                options: [
                  "Bihar and Uttar Pradesh",
                  "Rajasthan and Gujarat",
                  "Kerala and Tamil Nadu",
                  "Assam and Meghalaya",
                ],
                answer: "Bihar and Uttar Pradesh",
              },
              {
                question: "The 'Vokkaliga' community is primarily associated with?",
                options: ["Karnataka", "Punjab", "West Bengal", "Himachal Pradesh"],
                answer: "Karnataka",
              },
              {
                question:
                  "Which caste-based movement was associated with Phule in Maharashtra?",
                options: [
                  "Satyashodhak Samaj",
                  "Dalit Panthers",
                  "Brahmo Samaj",
                  "Arya Samaj",
                ],
                answer: "Satyashodhak Samaj",
              },
              {
                question: "The 'Justice Party' was formed to represent which group?",
                options: [
                  "Non-Brahmin castes",
                  "Brahmins",
                  "Tribal communities",
                  "British officials",
                ],
                answer: "Non-Brahmin castes",
              },
              {
                question: "The 'Cheramar' community is classified as?",
                options: ["Scheduled Caste", "OBC", "General", "Scheduled Tribe"],
                answer: "Scheduled Caste",
              },
              {
                question:
                  "The 'Patel' community is primarily associated with which region?",
                options: ["Gujarat", "Punjab", "Kerala", "Assam"],
                answer: "Gujarat",
              },
              {
                question: "The 'Bhutia' community is indigenous to?",
                options: ["Sikkim", "Karnataka", "Maharashtra", "Punjab"],
                answer: "Sikkim",
              },
              {
                question: "The 'Nai' caste is traditionally associated with?",
                options: ["Barber services", "Agriculture", "Weaving", "Pottery"],
                answer: "Barber services",
              },
              {
                question: "The 'Mala' community in Andhra Pradesh is classified as?",
                options: ["Scheduled Caste", "Scheduled Tribe", "OBC", "General"],
                answer: "Scheduled Caste",
              },
              {
                question:
                  "The 'Mahars', associated with Dr. B. R. Ambedkar, were historically subjected to?",
                options: [
                  "Untouchability",
                  "Landlessness",
                  "Forced labor",
                  "Religious persecution",
                ],
                answer: "Untouchability",
              },
              {
                question: "The 'Tharu' tribe is predominantly found in?",
                options: [
                  "Uttar Pradesh and Bihar",
                  "Gujarat and Rajasthan",
                  "Kerala and Tamil Nadu",
                  "Punjab and Haryana",
                ],
                answer: "Uttar Pradesh and Bihar",
              },
              {
                question:
                  "Which reformer founded the 'Self-Respect Movement' in Tamil Nadu?",
                options: [
                  "Periyar E. V. Ramasamy",
                  "B. R. Ambedkar",
                  "Jyotirao Phule",
                  "Raja Ram Mohan Roy",
                ],
                answer: "Periyar E. V. Ramasamy",
              },
              {
                question: "The 'Garo' tribe is primarily associated with which region?",
                options: ["Meghalaya", "Nagaland", "Assam", "Arunachal Pradesh"],
                answer: "Meghalaya",
              },
              {
                question: "The 'Panchayat system' in India was historically influenced by?",
                options: [
                  "Caste hierarchy",
                  "British administration",
                  "Religious norms",
                  "Land ownership patterns",
                ],
                answer: "Caste hierarchy",
              },
              {
                question:
                  "The 'Bhil' community, classified as a Scheduled Tribe, is primarily associated with?",
                options: [
                  "Rajasthan and Gujarat",
                  "Tamil Nadu and Kerala",
                  "Assam and Meghalaya",
                  "Punjab and Haryana",
                ],
                answer: "Rajasthan and Gujarat",
              },
              {
                question: "The 'Dhobi' caste is traditionally associated with?",
                options: ["Washing clothes", "Weaving", "Pottery", "Carpentry"],
                answer: "Washing clothes",
              },
              {
                question: "The 'Khatik' community is traditionally involved in?",
                options: ["Meat processing", "Agriculture", "Ironwork", "Priestly duties"],
                answer: "Meat processing",
              },
              {
                question: "The 'Banjara' community is traditionally associated with?",
                options: ["Nomadic trading", "Fishing", "Weaving", "Agriculture"],
                answer: "Nomadic trading",
              },
              {
                question: "The 'Nadar' community of Tamil Nadu historically faced?",
                options: [
                  "Social exclusion",
                  "Religious persecution",
                  "Forced labor",
                  "Land confiscation",
                ],
                answer: "Social exclusion",
              },
              {
                question: "The 'Valmiki' community is traditionally associated with?",
                options: ["Sanitation work", "Weaving", "Agriculture", "Priesthood"],
                answer: "Sanitation work",
              },
              {
                question: "The 'Koli' caste is predominantly found in which region?",
                options: [
                  "Gujarat and Maharashtra",
                  "Tamil Nadu and Kerala",
                  "Assam and Meghalaya",
                  "Punjab and Haryana",
                ],
                answer: "Gujarat and Maharashtra",
              },
              {
                question: "The 'Toda' tribe is indigenous to?",
                options: ["Tamil Nadu", "Arunachal Pradesh", "Assam", "Goa"],
                answer: "Tamil Nadu",
              },
              {
                question: "The 'Bhotiya' community is found in?",
                options: ["Uttarakhand", "Tamil Nadu", "Punjab", "Karnataka"],
                answer: "Uttarakhand",
              },
              {
                question: "The 'SC Sub-Plan' (SCSP) was introduced to promote?",
                options: [
                  "Welfare of Scheduled Castes",
                  "Educational reforms",
                  "Religious harmony",
                  "Land reforms",
                ],
                answer: "Welfare of Scheduled Castes",
              },
              {
                question: "The 'Valmiki Ambedkar Awas Yojana' was launched for?",
                options: [
                  "SC welfare and housing",
                  "Tribal rights",
                  "Land reforms",
                  "Education promotion",
                ],
                answer: "SC welfare and housing",
              },
              {
                question: "The 'Pasmanda Muslim' community belongs to which category?",
                options: ["OBC", "SC", "ST", "General"],
                answer: "OBC",
              },
              {
                question: "The 'Chakma' community is classified as?",
                options: ["Scheduled Tribe", "Scheduled Caste", "OBC", "General"],
                answer: "Scheduled Tribe",
              },
              {
                question: "The 'Lambani' community is traditionally associated with?",
                options: [
                  "Nomadic trading and embroidery",
                  "Fishing",
                  "Weaving",
                  "Agriculture",
                ],
                answer: "Nomadic trading and embroidery",
              },
              {
                question:
                  "The 'Devadasi' system, associated with caste oppression, was most prevalent in?",
                options: [
                  "Karnataka and Tamil Nadu",
                  "Punjab and Haryana",
                  "Bihar and Jharkhand",
                  "Assam and Meghalaya",
                ],
                answer: "Karnataka and Tamil Nadu",
              },
              {
                question: "The 'Dom' community is associated with?",
                options: ["Funeral services", "Pottery", "Agriculture", "Blacksmithing"],
                answer: "Funeral services",
              },
              {
                question: "The 'Gonds' are classified as?",
                options: ["Scheduled Tribe", "Scheduled Caste", "OBC", "General"],
                answer: "Scheduled Tribe",
              },
              {
                question: "The 'Nai' caste in India is traditionally associated with?",
                options: ["Barber services", "Agriculture", "Temple priesthood", "Weaving"],
                answer: "Barber services",
              },
              {
                question:
                  "The 'Thakur' caste belongs to which Varna in the traditional caste system?",
                options: ["Kshatriya", "Brahmin", "Vaishya", "Shudra"],
                answer: "Kshatriya",
              },
              {
                question:
                  "The 'Madiga' community, found in Andhra Pradesh, is classified as?",
                options: ["Scheduled Caste", "Scheduled Tribe", "OBC", "General"],
                answer: "Scheduled Caste",
              },
              {
                question: "The 'Van Gujjar' community is primarily associated with?",
                options: ["Nomadic cattle herding", "Weaving", "Agriculture", "Fishing"],
                answer: "Nomadic cattle herding",
              },
              {
                question: "The 'Bishnoi' community is famous for?",
                options: [
                  "Environmental conservation",
                  "Martial skills",
                  "Weaving",
                  "Agriculture",
                ],
                answer: "Environmental conservation",
              },
              {
                question: "The 'Gaddi' tribe is primarily found in?",
                options: ["Himachal Pradesh", "Tamil Nadu", "Kerala", "Assam"],
                answer: "Himachal Pradesh",
              },
              {
                question: "The 'Santhal' community is classified as?",
                options: ["Scheduled Tribe", "Scheduled Caste", "OBC", "General"],
                answer: "Scheduled Tribe",
              },
              {
                question: "The 'Malhar' caste, found in Madhya Pradesh, is classified as?",
                options: ["Scheduled Caste", "Scheduled Tribe", "OBC", "General"],
                answer: "Scheduled Caste",
              },
              {
                question: "The 'Bairwa' community in Rajasthan is classified as?",
                options: ["Scheduled Caste", "Scheduled Tribe", "OBC", "General"],
                answer: "Scheduled Caste",
              },
              {
                question: "The 'Parhaiya' tribe is predominantly found in?",
                options: ["Jharkhand", "Tamil Nadu", "Punjab", "Assam"],
                answer: "Jharkhand",
              },
            ]
          }
        ]
        export default quiz_data
            
          

      
