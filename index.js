const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment');

app.get('/', (req,res)=>{
    res.send("We are live")
});

app.post('/', express.json(), (req ,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

    function covid(agent){
        var payloadData = {
            
                "richContent": [
                  [
                    {
                      "type": "button",
                      "icon": {
                        "type": "chevron_right",
                        "color": "#FF9800"
                      },
                      "text": "COVID-19",
                      "link": "https://nitkkr.ac.in/sub_courses.php?id=570&id2=26",
                      "event": {
                        "name": "",
                        "languageCode": "",
                        "parameters": {}
                      }
                    }
                  ]
                ]
              }
              agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
              
        }
    function Main(agent){
        var payloadData ={
            "richContent": [
                [
                  {
                    "type": "chips",
                    "options": [
                      {
                        "text": "Institute",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }},
                      {
                        "text": "Academics",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      },
                      {
                        "text": "Departments",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      },
                      {
                        "text": "T and P",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      },
                      {
                        "text": "Student Activities",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      },
                      {
                        "text": "COVID-19",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      },
                      {
                        "text": "Nah! Just Browsing",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                          }
                        }
                      }
                      
                    ]
                  }
                ]
              ]
        }
        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
        }
        function Collegedetails(agent){
            var payloadData ={
                "richContent": [
                    [
                      {
                        "type": "chips",
                        "options": [
                          {
                            "text": "Profile",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                              }
                            }},
                          {
                            "text": "Vision and Mission",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                              }
                            }
                          },
                          {
                            "text": "Education and Admission",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                              }
                            }
                          },
                          {
                            "text": "Funds",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                              }
                            }
                          },
                          {
                            "text": "Photo Gallery",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                              }
                            }
                          }
                          
                        ]
                      }
                    ]
                  ]
            }
            agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
        function Collegedetailscustom2(agent){
            var payloadData ={
      "richContent": [
        [{
            "type": "image",
            "rawUrl": "http://nitkkr.ac.in/docs/director%20Sir.jpg",
            "accessibilityText": "Director"
          },
          {
            "type": "accordion",
            "title": "Vision And Mission",
            "subtitle": "NIT Kurukshetra",
            "image": {
              "src": {
                "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
              }
            },
            "text": "To be a role-model in technical education and research, responsive to global challenges.To impart quality technical education that develops innovative professionals and entrepreneurs.To undertake research that generates cutting-edge technologies and futuristic knowledge, focusing on the socio-economic needs."
          }
        ]
      ]
    }
     agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }

    function Collegedetailscustom1(agent){
        var payloadData ={
                
            "richContent": [
                  [
                    {
                      "type": "button",
                      "icon": {
                        "type": "chevron_right",
                        "color": "#FF9800"
                      },
                      "text": "Profile",
                      "link": " https://nitkkr.ac.in/sub_courses.php?id=9&id3=21",
                      "event": {
                        "name": "",
                        "languageCode": "",
                        "parameters": {}
                      }
                    }
                  ]
                ]
              }
            
            agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
        }
        function Collegedetailscustom5(agent){
            var payloadData ={
                    
                "richContent": [
                      [
                        {
                          "type": "button",
                          "icon": {
                            "type": "chevron_right",
                            "color": "#FF9800"
                          },
                          "text": "Photo Gallery",
                          "link": "https://nitkkr.ac.in/dep_courses_gallery.php?id=10&id3=119",
                          "event": {
                            "name": "",
                            "languageCode": "",
                            "parameters": {}
                          }
                        }
                      ]
                    ]
                  }
                
                agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
            function Academic(agent){
                var payloadData ={
                    "richContent": [
                        [
                          {
                            "type": "chips",
                            "options": [
                              {
                                "text": "Fees",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                }},
                              {
                                "text": "Research And Development",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                }
                              },
                              {
                                "text": "Academic Notifications",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                }
                              }
                              
                            ]
                          }
                        ]
                      ]
                }
                agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                }
                function Academiccustom(agent){
                    var payloadData ={
                            
                        "richContent": [
                              [
                                {
                                  "type": "button",
                                  "icon": {
                                    "type": "chevron_right",
                                    "color": "#FF9800"
                                  },
                                  "text": "Fee Structure",
                                  "link": "https://nitkkr.ac.in/sub_courses.php?id=59&id4=31",
                                  "event": {
                                    "name": "",
                                    "languageCode": "",
                                    "parameters": {}
                                  }
                                }
                              ]
                            ]
                          }
                        
                        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                    }
                function Academiccustom2(agent){
                        var payloadData ={
                            "richContent": [
                                [
                                  {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Civil",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=70&id4=43",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Mechanical",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=72&id4=44",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "Button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Electrical",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=73&id4=45",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "ECE",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=74&id4=46",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Computer",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=75&id4=47",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Physics",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=76&id4=48",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Chemistry",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=77&id4=49",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  },
                            {
                                    "type": "button",
                                    "icon": {
                                      "type": "chevron_right",
                                      "color": "#FF9800"
                                    },
                                    "text": "Maths",
                                    "link": "https://nitkkr.ac.in/sub_courses.php?id=78&id4=50",
                                    "event": {
                                      "name": "",
                                      "languageCode": "",
                                      "parameters": {}
                                    }
                                  }
                            
                                ]
                              ]
                            
                            } 
                        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                        }
                        function Academiccustom3(agent){
                            var payloadData ={
                                "richContent": [
                                    [
                                      {
                                        "type": "button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "General Notifications",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=80&id4=52",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      },
                                {
                                        "type": "button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "Results",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=81&id4=53",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      },
                                {
                                        "type": "Button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "Convocation",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=82&id4=54",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      },
                                {
                                        "type": "button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "Exam",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=83&id4=56",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      },
                                {
                                        "type": "button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "Scholarship",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=84&id4=57",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      },
                                {
                                        "type": "button",
                                        "icon": {
                                          "type": "chevron_right",
                                          "color": "#FF9800"
                                        },
                                        "text": "Attendance",
                                        "link": "https://nitkkr.ac.in/sub_courses.php?id=85&id4=58",
                                        "event": {
                                          "name": "",
                                          "languageCode": "",
                                          "parameters": {}
                                        }
                                      }
                                
                                    ]
                                  ]
                                
                                } 
                            agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                            }
            function Activities(agent){
                                var payloadData ={
                                    "richContent": [
                                        [
                                          {
                                            "type": "chips",
                                            "options": [
                                              {
                                                "text": "Confluence",
                                                "image": {
                                                  "src": {
                                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                                  }
                                                }},
                                              {
                                                "text": "Techspardha",
                                                "image": {
                                                  "src": {
                                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                                  }
                                                }
                                              },
                                              {
                                                "text": "Technical Societies",
                                                "image": {
                                                  "src": {
                                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                                  }
                                                }
                                              },
                                              {
                                                "text": "Cultural Clubs",
                                                "image": {
                                                  "src": {
                                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                                  }
                                                }
                                              }
                                              
                                            ]
                                          }
                                        ]
                                      ]
                                }
                                agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                                }
                        function ActivitiesConflu(agent){
                                    var payloadData ={
                                    
                              "richContent": [
                                [
                                    {
                                        "type": "image",
                                        "rawUrl": "https://i.ytimg.com/vi/BKAP0fEsK1w/maxresdefault.jpg",
                                        "accessibilityText": "Conflu"
                                      },
                                  {
                                    "type": "accordion",
                                    "title": "Confluence",
                                    "subtitle": "NIT Kurukshetra",
                                    "image": {
                                      "src": {
                                        "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                      }
                                    },
                                    "text": "Confluence, popularly known as conflu, is the annual cultural festival of the National Institute of Technology Kurukshetra. It is a four-day long event held towards the end of February every year. It draws a footfall of more than 15,000 students from more than 60 colleges from across the country. Started in 1991 by a bunch of enthusiastic NITians, now in its 21st edition, has snowballed to become the largest festival of its kind in North India."
                                  }
                                ]
                              ]
                            }
                             agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                            }
   
                        function Clubs(agent){
                                    var payloadData =
                                    {
                              "richContent": [
                                [
                                  {
                                    "type": "image",
                                    "rawUrl": "http://nitkkr.ac.in/docs/pg3.jpg",
                                    "accessibilityText": "Photog"
                                  },
                                  {
                                    "type": "accordion",
                                    "title": "Photography Club",
                                    "subtitle": "NIT Kurukshetra",
                                    "image": {
                                      "src": {
                                        "rawUrl":"https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png" 
                                      }
                                    },
                                    "text": "This is the official club of NIT Kurukshetra responsible for covering all the events during various fests (like Confluence, Techspardha, Talent Show), guest lectures, seminars, etc. Apart from photography, the club indulges in movie making, video editing, app designing, graphic designing (Photoshop) and web designing. The club is a conglomerate of photography enthusiasts who teach and mould students in photography, video making and designing skills.The club also organizes various fun events during cultural fests like Confluence (the annual cultural fest of NIT Kurukshetra) and Talent Show. Events like Impressions (story depiction through pictures), Shutterbug (theme based photography), Cinematography (Short movie making), Capsun (Caption Writing), etc. that not only test one’s photography skills but also the person’s creativity. The flagship events include Limelight, the much loved fashion photography event and Photo Scavenger Hunt, a treasure hunt with pictures. The members of the club are very enthusiastic about learning and developing new skills and expanding their creativity. Individuals who are hardworking, dedicated and creative are the best fit for our club, in addition to those who have a prior knowledge in photography, videography, designing or editing."
                                  },
                                  {
                                    "type": "image",
                                    "rawUrl": "https://i.ytimg.com/vi/0sEcY-Soc6I/maxresdefault.jpg",
                                    "accessibilityText": "Spic"
                                  },
                                  
                                  {
                                    "type": "accordion",
                                    "title": "Spicmacay",
                                    "subtitle": "NIT Kurukshetra",
                                    "image": {
                                      "src": {
                                        "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                      }
                                    },
                                    "text": "SPICMACAY (Society for the Promotion of Indian Classical Music and Culture Amongst Youth) is a non-political nationwide voluntary movement that organizes programs of classical music and dance, folk arts, crafts, yoga, classic cinema screenings and much more inside the schools and colleges throughout the world to make students more aware about the Indian and world heritage. It was founded by a renowned professor of IIT Delhi, Dr. Kiran Seth in 1977.SPICMACAY in NIT Kurukshetra, is an official club which provides a great platform for all the talented performers. The club is not just an exquisite platform to showcase the talent but also an opportunity to grow and learn from other fellow performers and enhance their pre-acquired skills. It also organizes various workshops where famous and approachable artists are invited to learn more and improve."
                                  },
                                {
                                    "type": "description",
                                    "title": "Events and workshops",
                                    "text": [
                                      "Performances for Independence day, Republic day, Women’s day, Unity day and Inaugurations for various fests",
                                      "Workshop on music, dance and drama",
                                  "Organised a workshop conducted by some devotees of LORD KRISHNA, from ISKON.",
                                  "NIT’s Got Talent"
                                    ]
                                  },
                                  {
                                    "type": "image",
                                    "rawUrl": "https://umaine.edu/news/wp-content/uploads/sites/3/2017/04/Student-Symposium-news-feature.jpg",
                                    "accessibilityText": "SAC"
                                  },
                                  {
                                    "type": "accordion",
                                    "title": "STUDENT's ACTIVITY CLUB",
                                    "subtitle": "NIT Kurukshetra",
                                    "image": {
                                      "src": {
                                        "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                      }
                                    },
                                    "text": "It's the major, managerial club of the college which plays the most important role in the organization and overall management of the both the cultural fests namely, Talent Show and Confluence.SAC plays a prominent role in bringing life to the heart of the institute i.e. AE Lawns, by organising fun events including all the games at the stalls, the stage and the DJ during the Fests."
                                  },
                                 {
                                    "type": "description",
                                    "title": "Events",
                                    "text": [
                                      "Mathematica",
                                  "Treasure hunt",
                                  "Gully cricket",
                                  "Beg Borrow Steal",
                                      "Beg Borrow Steal",
                                  "Roadies",
                                  "Sherlock Adventures"
                                    ]
                                  },
                            {
                                    "type": "description",
                                    "title": "Online Events",
                                    "text": [
                                      "9 baj gaye kya",
                                  "Meme Contest ",
                                  "Online Treasure Hunt",
                                  "Online Roadies"
                                    ]
                                  },
                            {
                                    "type": "Accordion",
                                    "title": "Responsibilities",
                                    "subtitle": "SAC is responsible for-",
                                    "image": {
                                      "src": {
                                        "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                      }
                                    },
                                    "text": "Maintaining the decorum and preventing any disputes during the fests.The Art Work that pops up during the fests at various locations in the institute, along with other clubs.Publicizing and increasing the reach of our fests in other institutes, along with the others"
                                  }
                                ]
                              ]
                            }
                             agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                            }
                    function Socities(agent){
                                var payloadData ={
                                
                          "richContent": [
                            [
                              {
                                "type": "image",
                                "rawUrl": "https://i.ytimg.com/vi/MeD4NnXUovg/maxresdefault.jpg",
                                "accessibilityText": "EMR"
                              },
                              {
                                "type": "accordion",
                                "title": "EMR",
                                "subtitle": "NIT Kurukshetra",
                                "image": {
                                  "src": {
                                    "rawUrl":"https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png" 
                                  }
                                },
                                "text": "Embedded Systems & Robotics Club, NIT Kurukshetra is an earnest endeavor in the automata domain. The brainchild of a diligent student fraternity, the club aims to elevate standards of the institute by pioneering quality learning and guidance in the field of robotics. A huge student community fancies the world of robotics and the club aids this materialization. The salient feature of the club is that it aims at evolving the seeds of knowledge in this novice chunk, nurturing them into future technocrats. The club welcomes all those with a spark, who crave to dig into this vast promising realm, and ensures a 24x7 lucid mentorship."
                        },
                        {
                                "type": "image",
                                "rawUrl": "https://nitkkr.ac.in/images/gallery/15405415971.jpg",
                                "accessibilityText": "Mechsoc"
                              },
                              
                              {
                                "type": "accordion",
                                "title": "Mechsoc",
                                "subtitle": "NIT Kurukshetra",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                },
                                "text": "Mechsoc is the official technical society of the departments of Mechanical engineering and Industrial Engineering & Management. Formed in the late 90s along with all the other technical societies, Mechsoc functions with the objective of enhancing the technical acumen of the students who come under its umbrella, aiming to bring their core technical competencies in alignment with the national benchmark. The society accomplishes this mission by organising a plethora of activities, the primary among which are the two major technical festivals of the Institution that it organises in collaboration with the other societies, and the various workshops it organises round the year. Altius and Techspardha are the two main technical festivals of the Institution, and Mechsoc organises more than 10 events as part of the fests, giving away hefty cash prizes to the winners. Mechsoc has around 90 members across all four years. The members are selected after gruelling rounds of inductions and careful consideration. The members are known to harbour a tremendous work ethic and an impeccable sense of belonging towards the society. The society has been a constant feature of the Institution for around two decades now, and has, in convincing fashion, stood the Institution in good stead on numerous occasions through its various activities and endeavours."
                        },
                        {
                                "type": "image",
                                "rawUrl": "https://yt3.ggpht.com/a/AATXAJxtc6l8-hLm6dtGlf4f5CLtd7B2351S2xPaTQ=s900-c-k-c0xffffffff-no-rj-mo",
                                "accessibilityText": "Techno"
                              },
                              
                              {
                                "type": "accordion",
                                "title": "Technobyte",
                                "subtitle": "NIT Kurukshetra",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                },
                                "text": "Technobyte is the official technical society of Computer and IT Engineering geeks of NIT Kurukshetra. Students here develop and hone the technical skills. We conduct different workshops on the lastest technologies, organise events and Guest lectures by the remarkable persons out there in the industry for the students during the Techspardha. Here the vision is to guide students to become a great technical geek by providing a quality technical environment to learn different fundamentals of computer technology and contribute towards the society for the good."},
                        {
                                "type": "description",
                                "title": "Events",
                                "text": [
                                  "Hackshetra",
                              "Excalibur",
                              "KeyNote",
                              "Encoder",
                                  "BlackBox",
                              "GameStation",
                                ]
                              },
                        {
                                "type": "image",
                                "rawUrl": "http://knowafest.com/files/uploads/21442837_507632012931783_171373014_n-2017090811.jpg",
                                "accessibilityText": "SAE"
                              },
                             
                        {
                                "type": "accordion",
                                "title": "SAE",
                                "subtitle": "NIT Kurukshetra",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                },
                                "text": "SAEINDIA NIT-Kurukshetra Collegiate club has been working towards practical training and generatating interest of the budding engineers in the college in the field of automobile engineering since 2009. The journey started with the series of overhaul workshops, Autokriti. The workshop has featured overhaul of Maruti 800 engines as well as the complete Maruti 800 car in its very recent years. The 4th edition in 2012, under the chairmanship of Mr. Harjot Singh, Final year, Mechanical Engineering and Vice Chairmanship of Mr. Gundeep Shah, Final Year, Mechanical Engineering lured a participation of more than 240 students from various colleges in North India. The Club has also organised many college level workshops including a scooter overhaul workshop, Transmania – Transmission overhaul workshop, Enginium – An engine overhaul workshop. The Club has also been an active participant in the BAJA SAEINDIA, a national level competition organised by SAEINDIA based on designing and fabricating a prototype a rugged off-road four wheel vehicle intended for the sale to weekend hobbyist." 
                            },
                        {
                                "type": "image",
                                "rawUrl": "https://nitkkr.ac.in/images/gallery/14781670421.jpg",
                                "accessibilityText": "MicroBus"
                        },
                             
                        {
                                "type": "accordion",
                                "title": "Microbus",
                                "subtitle": "NIT Kurukshetra",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.facultyplus.com/wp-content/uploads/2018/09/NIT-Kurukshetra-Logo.png"
                                  }
                                },
                                "text": "Microbus is sophisticated and professional outfit of the institute where the brains of the ELECTRONICS masterminds are nurtured and the talent of the whiz kids synchronized to make every programme successful. In recent times, Microbus has been a hub of activities and have brought laurels to the Institution. To call them merely a society would undermine their very value. Here all the students get integrated and their confidence is reinforced, so as to drive greater mileage from them. Primary focus is on the technical aspects of their respective branches, which touches every nook and corner of the vast info ? highway. We are not only a technical society but also an object oriented one where every single viewpoint is paid heed to. We strive to achieve perfection par excellence with several successful events under our belt. The events have been witnessing increased response from institutions throughout the country. They have been an unbelievable opera of endowment, skills and talent." }
                            ]
                          ]
                        }
                        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                        }
                                              
                        function Techspardha(agent){
                            var payloadData ={
                            
                      "richContent": [
                        [
                            {
                                "type": "image",
                                "rawUrl": "https://nitkkr.ac.in/images/gallery/14781668811.jpg",
                                "accessibilityText": "Techspardha"
                        },
                          {
                            "type": "accordion",
                            "title": "Techsparsha",
                            "subtitle": "NIT Kurukshetra",
                            "image": {
                              "src": {
                                "rawUrl": "https://example.com/images/logo.png"
                              }
                            },
                            "text": "Techspardha is a national level annual techno-managerial students’ festival of National Institute of Technology, Kurukshetra. It started in 1995 as 'Technospect' (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, same year it was renamed as Techspardha.Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition. Techspardha is hosts about 75 competitive events showcasing innovations, startups,creativity of students including:Technical Competitions, Exhibitions, Guest lectures, Workshops"
                          }
                        ]
                    ]
                    }
                     agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                    }    
            function tandp(agent){
                        var payloadData ={
                        "richContent": [
                    [
                      {
                        "type": "button",
                        "icon": {
                          "type": "chevron_right",
                          "color": "#FF9800"
                        },
                        "text": "Team",
                        "link": "https://nitkkr.ac.in/docs/Placement_team_15.07.2020%2028082020.pdf",
                        "event": {
                          "name": "",
                          "languageCode": "",
                          "parameters": {}
                        }
                      },
                {
                        "type": "button",
                        "icon": {
                          "type": "chevron_right",
                          "color": "#FF9800"
                        },
                        "text": "Guidelines",
                        "link": "https://nitkkr.ac.in/docs/T&P_Cell_Guidelines.pdf",
                        "event": {
                          "name": "",
                          "languageCode": "",
                          "parameters": {}
                        }
                      },
                {
                        "type": "Recruitor",
                        "icon": {
                          "type": "chevron_right",
                          "color": "#FF9800"
                        },
                        "text": "Button text",
                        "link": "https://nitkkr.ac.in/docs/Major_Recruiters_1_1.pdf",
                        "event": {
                          "name": "",
                          "languageCode": "",
                          "parameters": {}
                        }
                      },
                {
                        "type": "button",
                        "icon": {
                          "type": "chevron_right",
                          "color": "#FF9800"
                        },
                        "text": "Statistics",
                        "link": "https://nitkkr.ac.in/docs/Academic%20Session%202018_19%2021072020.pdf",
                        "event": {
                          "name": "",
                          "languageCode": "",
                          "parameters": {}
                        }
                      },
                {
                        "type": "button",
                        "icon": {
                          "type": "chevron_right",
                          "color": "#FF9800"
                        },
                        "text": "Brochure",
                        "link": "https://nitkkr.ac.in/docs/Training%20&%20Placement%20Brochure%202020_21%2018082020_compressed%2018082020.pdf",
                        "event": {
                          "name": "",
                          "languageCode": "",
                          "parameters": {}
                        }
                      }
                
                    ]
                  ]
                        }
                agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                }                    
                            
        function EducationAdmissionSystem(agent){
                    var payloadData ={
                    
              "richContent": [
                [
                  {
                    "type": "accordion",
                    "title": "EDUCATION SYSTEM",
                    "subtitle": "NIT Kurukshetra",
                    "image": {
                      "src": {
                        "rawUrl": "https://example.com/images/logo.png"
                      }
                    },
                    "text": "The Education System of the Institute is divided into academic sessions comprising of two semesters – Even and Odd semester. The Institute offers courses of study leading to B.Tech and M.Tech. degree and research facilities leading to the degree of Doctor of Philosophy. The small of instructions and examination is English. The Institute has assumed the status of a Deemed University w.e.f. 26.6.2002. The Institute is now independent in every respect relating to academic work such as Examinations, evaluation of the answer sheets, declaration of results and other allied matters. The Institute has switched over from the conventional examination and evaluation system to the Credit Based Examination System."
                  },
                 {
                    "type": "accordion",
                    "title": "ADMISSION PROCEDURE",
                    "subtitle": "NIT Kurukshetra",
                    "image": {
                      "src": {
                        "rawUrl": "https://example.com/images/logo.png"
                      }
                    },
                    "text": "In the Undergraduate courses – B.Tech. Degree Courses, admissions are made on the basis of All India Engineering Entrance Examination (AIEEE) conducted by the Central Board of School Education (CBSE) on behalf of the Govt. of India.However the admission to M. Tech. degree courses are made on the basis of candidate’s score in the GATE examination. Seats are first filled up by admitting GATE qualified candidates and then by industry sponsored candidates. Remaining vacant seats are offered to Non-GATE candidates with a minimum of 60 percent marks (55 percent for SC candidates) in their qualifying examination. While GATE candidates are eligible for a scholarship of Rs. 5000/- per month. Non-GATE candidates are not given any scholarship"
                  }
                ]
              ]
            }
             agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
            
            
            
            
            function Funds(agent){
                    var payloadData ={
                    
              "richContent": [
                [
                  {
                    "type": "accordion",
                    "title": "SOURCES OF FUNDS",
                    "subtitle": "NIT Kurukshetra",
                    "image": {
                      "src": {
                        "rawUrl": "https://example.com/images/logo.png"
                      }
                    },
                    "text": "As per establishment of the REC now known as NIT, Kurukshetra the entire Non-plan expenditure on Undergraduate Courses was borne by the central and State Government on 50:50 basis. This practice remained intact upto 31.3.2003 Consequent upon conversion of REC to NIT by the Government of India has taken over full administrative and financial control and the Central Government has started bearing the expenditure on Undergraduate Courses on 100% basis. However, Since the inception of the Institute the expenditure on PG Courses is borne by the Central Government."
                  }
                ]
              ]
            }
             agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
        function Departments(agent){
            var payloadData ={
                    
              "richContent": [
                [
                {
                    "type": "info",
                    "title": "Computer Engineering",
                    "subtitle": "HoD : Mayank Dave",
                    "image": {
                      "src": {
                        "rawUrl": "https://nitkkr.ac.in/admin/member_images/1494585987Photo%20MD%202016.jpg"
                      }
                    },
                    "actionLink": "https://nitkkr.ac.in/sub_courses.php?id=389&id3=58"
                  },
                {
                    "type": "info",
                    "title": "Civil Engineering",
                    "subtitle": "HoD : S.N. Sachdeva",
                    "image": {
                      "src": {
                        "rawUrl": "https://nitkkr.ac.in/admin/member_images/1592564425SNS%20Photo.jpg"
                      }
                    },
                    "actionLink": "https://nitkkr.ac.in/sub_courses.php?id=139&id3=59"
                  },
                {
                    "type": "info",
                    "title": "Mechanical Engineering",
                    "subtitle": "HoD : Dinesh Khanduja",
                    "image": {
                      "src": {
                        "rawUrl": "https://nitkkr.ac.in/admin/member_images/1587903948Dinesh.jpg"
                      }
                    },
                    "actionLink": "https://nitkkr.ac.in/sub_courses.php?id=141&id3=60"
                  },
                {
                    "type": "info",
                    "title": "Electrical Engineering",
                    "subtitle": "HoD : Lalit Mohan Saini",
                    "image": {
                      "src": {
                        "rawUrl": "https://nitkkr.ac.in/admin/member_images/1507801197LMS.jpg"
                      }
                    },
                    "actionLink": "https://nitkkr.ac.in/sub_courses.php?id=412&id4=82"
                  },
                {
                    "type": "info",
                    "title": "Electronics & Communication Engineering",
                    "subtitle": "HoD : Dr. Vikas Mittal",
                    "image": {
                      "src": {
                        "rawUrl": "http://nitkkr.ac.in/docs/vikas%20mittal_ECED_passport%20size.JPG"
                      }
                    },
                    "actionLink": "https://nitkkr.ac.in/sub_courses.php?id=143&id3=62"
                  }
             ]
              ]
            }
            agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
                                 
                            
                            
                            
    var intentMap = new Map();

   
    intentMap.set('About Covid-19',covid)
    intentMap.set('Name',Main)
    intentMap.set('College details - custom-2',Collegedetailscustom2)
    intentMap.set('College details',Collegedetails)
    intentMap.set('College details - custom',Collegedetailscustom1)
    intentMap.set('College details - custom-5',Collegedetailscustom5)
    intentMap.set('Academic',Academic)
    intentMap.set('Academic - custom',Academiccustom)
    intentMap.set('Academic - custom-2',Academiccustom2)
    intentMap.set('Academic - custom-3',Academiccustom3)
    intentMap.set('Activities',Activities)
    intentMap.set('Activities - Conflu',ActivitiesConflu)
    intentMap.set('Activities - clubs',Clubs)
    intentMap.set('Activities - Societies',Socities)
    intentMap.set('Activities - Techspardha',Techspardha)
    intentMap.set('T&P',tandp)
    intentMap.set('College details - custom-4',Funds)
    intentMap.set('College details - custom-3',EducationAdmissionSystem)
    intentMap.set('Departments',Departments)


    agent.handleRequest(intentMap);
});

app.listen(3333, ()=>console.log("Server is live at port 3333"));