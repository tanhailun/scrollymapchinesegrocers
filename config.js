var config = {
    style: 'mapbox://styles/tanhailun/ck8i9cxfu05pp1iqpcsnjjfmx',
    accessToken: 'pk.eyJ1IjoidGFuaGFpbHVuIiwiYSI6ImNrN3h5NDVjcDAweGYzbG83YTdvcjhjYmIifQ.CMP3ZyJYJOCVhum1Mu3vmw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Chinese Grocers in Greenville, Mississippi',
    subtitle: 'A Digital Narrative of the Chinese Diaspora to the American South, circa 1930',
    byline: 'Hai Lun Tan, Mapping for Architecture, Spring 2020',
    footer: 'Source: source citations, etc.',
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
            description: 'This was the first grocery store opened by the Joe family. Their morning probably started here, the grocer would stock their shelves, meet with deliverymen and salesmen to discuss prices, and serve the first customers who came in for breakfast items. Unlike the gendered and racialized labor of laundries in larger urban cities, the Chinese grocers in the South filled a unique economic niche as they operated grocers to serve black populations and poor whites.',
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
            description: 'Since the family owned two stores, it was likely that one member of the family would coordinate with the other store. As the day continued, workers would come in to buy lunchmeats and or soft drinks. After the lunch rush was the schoolchildren who came to buy candies and chewing gum. Soon after, housewives came to buy ingredients for dinner, as most households did not have refrigerators. During the early evening, the grocery store fronts transformed into social spaces as people lingered. For most grocers, their day did not end until midnight or even later.',
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
            id: 'other-identifier3',
            title: 'First Baptist Church in Greenville',
            image: 'http://www.deltastate.edu/library/wp-content/uploads/sites/49/2016/12/tn_2-SID-1-schoolroom.jpg',
            description: 'The Baptist Church was a crucial facet in Chinese community building for several reasons. The Church held Chinese services on Sundays, since most of the grocers were closed for part of the day on Sundays. Before the integration of Chinese students into white schools as a result of Gong Lum v. Rice in 1927, the Baptist Church played a crucial role in attraching teachers and raising funds for schoolhouses. Most schoolhouses tried to cater to all grades, resulting in a classroom of mixed aged students. Class instruction generally consist of English lessons in the mornings and then Chinese in the afternoons.',
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
            description: 'Even without tong associations and other conventional methods to community formation, Chinese communities in Greenville were connected to other Chinese communities nearby through the Church, even though it is unclear if Chinese simply utilized the church as a social institution or a religious one as well - perhaps both.', 
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
            description: 'The Chinese were buried in this cemetery, separate from white and black cemeteries. For funerals, the cemetery was connected to the Chinese Baptist Church through Rev. Ted Sheppard, who served as an ally to the Chinese community. For those who were buried at the cemetery, Chinese would gather on several occasions throughout the year for funeral rituals or to pay homage to ancesters on special occasions, such as the Qingming festival.',
            location: {
               center: [-91.0570607,33.381007,],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },



    ]



};
