var config = {
    style: 'mapbox://styles/tanhailun/ck8i9cxfu05pp1iqpcsnjjfmx',
    accessToken: 'pk.eyJ1IjoidGFuaGFpbHVuIiwiYSI6ImNrN3h5NDVjcDAweGYzbG83YTdvcjhjYmIifQ.CMP3ZyJYJOCVhum1Mu3vmw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Chinese Grocers in Greenville, Mississippi',
    subtitle: 'A Digital Narrative of the Chinese Diaspora in the American South in the Early 20th Century',
    byline: 'Hai Lun Tan, Mapping for Architecture, Spring 2020',
    footer: 'Sources: 1920, 1930, and 1940 Census Data, the Mississippi Delta Chinese Heritage Photos Collections from Delta State University, and the Tri-State Chinese Directory from archives.org. Secondary source literature analyzed include anthropological and historical works by authors Lucy Cohen, Moon-Ho Jung, and John Jung.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Greenville, Mississippi',
            image: '',
            description: 'In order to better understand the intimate socio-economic life of Chinese grocers and their families in the 1930s, this storymap narrates a series of pinned locations in which they might have visited on a regular basis. When considering the physical mobility of a Chinese grocer in the midst of Jim Crow South, this map aims to trace their movements throughout Greenville, as we think about the ways in which race and class limited on their movement.',
            location: {
                center: [-91.05360, 33.40159],
                zoom: 9.29,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: ' Joe Gow Nue and Co. located at 200 Washington Ave',
            image: 'https://i.redd.it/cb69rpwselk31.jpg',
            description: 'This was the first grocery store opened by the Joe family. Their morning probably started here, the grocer would stock their shelves, meet with deliverymen and salesmen to discuss prices, and serve the first customers who came in for breakfast items. Unlike the gendered and racialized labor of laundries in larger urban cities, the Chinese grocers in the South filled a unique economic niche as they operated grocers to serve black populations and poor whites. Source: Jung, John. Chopsticks in the Land of Cotton. ',
            location: {
                center: [-91.06379, 33.41315],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 35.20
            },
            onChapterEnter: [// {
                //     layer: 'layer-name',
                //     opacity: 1
                // }],
            ],    
            onChapterExit: [// {
                //     layer: 'layer-name',
                //     opacity: 0
                // }]
            ]       
        }, 
        {
            id: 'other-identifier1',
            title: 'Joe Gow Nue #2 located at 601 Nelson Ave',
            image: '',
            description: 'Since the family owned two stores, it was likely that one member of the family would coordinate with the other store. As the day continued, workers would come in to buy lunchmeats and or soft drinks. After the lunch rush was the schoolchildren who came to buy candies and chewing gum. Soon after, housewives came to buy ingredients for dinner, as most households did not have refrigerators. During the early evening, the grocery store fronts transformed into social spaces as people lingered. For most grocers, their day did not end until midnight or even later. Source: Jung, John. Chopsticks in the Land of Cotton.',
            location: {
                center: [-91.05505, 33.41477],
                zoom: 16.00,
                pitch: 1.50,
                bearing: 33.60
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'other-identifier5',
            title: 'Malone and Hyde Wholesalers',
            image: 'https://ia800303.us.archive.org/BookReader/BookReaderImages.php?zip=/17/items/Tri-stateChineseDirectoryOfMississippiArkansasAndTennessee/Tri-stateDirectory_single_page_jp2.zip&file=Tri-stateDirectory_single_page_jp2/Tri-stateDirectory_single_page_0041.jp2&scale=4&rotate=0',
            description: 'Most Chinese grocers bought their produce wholesale from wholesalers, like Malone and Hyde. They often cultivated an often tenuous but economically practical relationship with one another. Sometimes grocers would have to travel out of state for produce. Source: Tri-State Chinese Directory.',
            location: {
                center: [-90.05745, 35.10627],
                zoom: 15.12,
                pitch: 0.00,
                bearing: 15.60
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier6',
            title: 'Greenville Bank and Trust Co. ',
            image: 'https://ia800303.us.archive.org/BookReader/BookReaderImages.php?zip=/17/items/Tri-stateChineseDirectoryOfMississippiArkansasAndTennessee/Tri-stateDirectory_single_page_jp2.zip&file=Tri-stateDirectory_single_page_jp2/Tri-stateDirectory_single_page_0006.jp2&scale=2&rotate=0',
            description:'The role of banks in the lives of Chinese grocers is understudied. Most grocery stores relied heavily on kinship networks and family members to work in the stores. Directories, such as this, offers a look into the ways banking became a more central facet in every day life. This could suggest a sense of permanence and settling among the Chinese community as we move toward the 1940s and 1950s.Source: Tri-State Chinese Directory.',
            location: {
               center: [-91.06133, 33.41169],
                zoom: 16.00,
                pitch: 1.50,
                bearing: 34.40
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier3',
            title: 'First Baptist Church in Greenville',
            image: 'http://www.deltastate.edu/library/wp-content/uploads/sites/49/2016/12/tn_2-SID-1-schoolroom.jpg',
            description: 'The Baptist Church was a crucial facet in Chinese community building for several reasons. The Church held Chinese services on Sundays, since most of the grocers were closed for part of the day on Sundays. Before the integration of Chinese students into white schools as a result of Gong Lum v. Rice in 1927, the Baptist Church played a crucial role in attraching teachers and raising funds for schoolhouses. Most schoolhouses tried to cater to all grades, resulting in a classroom of mixed aged students. Class instruction generally consist of English lessons in the mornings and then Chinese in the afternoons. Source: Delta State University, MS Delta Chinese Museum Photos Collection.',
            location: {
              center: [-91.06150, 33.40924],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'other-identifier4',
            title: 'Chinese Baptist Mission of Cleveland',
            image: 'http://www.deltastate.edu/library/wp-content/uploads/sites/49/2016/12/tn_Chow_Chinese_Baptist_Mission_Cleveland-575x400.jpg',
            description: 'Even without tong associations and other conventional methods to community formation, Chinese communities in Greenville were connected to other Chinese communities nearby through the Church, even though it is unclear if Chinese simply utilized the church as a social institution or a religious one as well - perhaps both. Source: Delta State University, MS Delta Chinese Museum Photos Collection.', 
            location: {
               center: [-90.712389, 33.747279],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier2',
            title: 'The Chinese Cemetery in Greenville',
            image: 'https://static01.nyt.com/images/2018/03/12/lens/13-lens-chinadelta10/13-lens-chinadelta10-superJumbo.jpg?quality=90&auto=webp',
            description: 'The Chinese were buried in this cemetery, separate from white and black cemeteries. For funerals, the cemetery was connected to the Chinese Baptist Church through Rev. Ted Sheppard, who served as an ally to the Chinese community. For those who were buried at the cemetery, Chinese would gather on several occasions throughout the year for funeral rituals or to pay homage to ancesters on special occasions, such as the Qingming festival. Source: https://nyti.ms/2GnD4FV',
            location: {
               center: [-91.0570607,33.381007,],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
      
        {
            id: 'other-identifier10',
            title: 'Conclusion',
            image: '',
            description: 'The pinned locations attempt to detail the circuits of the socio-economic lives of Chinese grocers and their families during the early 20th century. Other anchoring points included the network of Baptist churches and schools. Ultimately, a large part of their livelihoods focused on their grocery stores and this became the vehicle in which they navigated the complicated racial and economic contexts in the midst of the Jim Crow South.',
            location: {
               center: [-91.05360, 33.40159,],
                zoom: 9.29,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },


    ]



};
