export interface NewsArticle {
  id: number;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
}

export const NEWS_ARTICLES_DATA: NewsArticle[] = [
  {
    id: 1,
    day: '22',
    month: 'JULY 2025',
    title: 'Parent-Teacher Conference',
    time: '02:00 PM - 06:00 PM',
    location: 'School Conference Center',
    shortDescription: 'Join us for the Parent-Teacher Conference to discuss student progress and upcoming plans.',
    fullDescription: `Lorem ipsum dolor sit amet consectetur adipisicing     elit. Officiis, tempora commodi fugit 
                    facilis reiciendis quae facere ipsa corporis nemo, magnam deleniti nam ratione id magni sint maxime, provident quasi deserunt 
                    aliquid illo voluptatibus optio beatae eligendi? Ipsam odio voluptates dolor quisquam dolorem expedita est ab eligendi earum ducimus 
                    obcaecati, quaerat delectus nulla aliquam eius atque animi sit tempora? Similique blanditiis debitis saepe minus, voluptatem 
                    assumenda neque facere exercitationem in? Repellat molestiae optio, iste hic illum aliquam mollitia exercitationem labore 
                    reprehenderit odit culpa vitae delectus quasi maiores dolorem harum accusantium quae doloribus tenetur id vel. Alias voluptate 
                    excepturi fugiat quod error!
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing     elit. Officiis, tempora commodi fugit 
                    facilis reiciendis quae facere ipsa corporis nemo, magnam deleniti nam ratione id magni sint maxime, provident quasi deserunt 
                    aliquid illo voluptatibus optio beatae eligendi? Ipsam odio voluptates dolor quisquam dolorem expedita est ab eligendi earum ducimus 
                    obcaecati, quaerat delectus nulla aliquam eius atque animi sit tempora? Similique blanditiis debitis saepe minus, voluptatem 
                    assumenda neque facere exercitationem in? Repellat molestiae optio, iste hic illum aliquam mollitia exercitationem labore 
                    reprehenderit odit culpa vitae delectus quasi maiores dolorem harum accusantium quae doloribus tenetur id vel. Alias voluptate 
                    excepturi fugiat quod error!
                    <br /
                    Lorem ipsum dolor sit amet consectetur adipisicing     elit. Officiis, tempora commodi fugit 
                    facilis reiciendis quae facere ipsa corporis nemo, magnam deleniti nam ratione id magni sint maxime, provident quasi deserunt 
                    aliquid illo voluptatibus optio beatae eligendi? Ipsam odio voluptates dolor quisquam dolorem expedita est ab eligendi earum ducimus 
                    obcaecati, quaerat delectus nulla aliquam eius atque animi sit tempora? Similique blanditiis debitis saepe minus, voluptatem 
                    assumenda neque facere exercitationem in? Repellat molestiae optio, iste hic illum aliquam mollitia exercitationem labore 
                    reprehenderit odit culpa vitae delectus quasi maiores dolorem harum accusantium quae doloribus tenetur id vel. Alias voluptate 
                    excepturi fugiat quod error!`
  },
  {
    id: 2,
    day: '15',
    month: 'AUGUST 2025',
    title: 'Independence Day Celebration',
    time: '09:00 AM - 11:00 AM',
    location: 'College Ground',
    shortDescription: 'Celebrate Independence Day with a flag hoisting ceremony and cultural performances.',
    fullDescription: `We invite all students and faculty to join the Independence Day celebrations, including the flag hoisting 
            ceremony, speeches, and cultural performances showcasing our unity and heritage.`
  }
];
