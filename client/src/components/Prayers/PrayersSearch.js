// export default function PrayersSearch(props){

//     const {search} = window.location;
//     const query = new URLSearchParams(search).get('s')
    
//     const filterPrayers = (prayers, query) => {
//         console.log(props.allPrayers[2])
//         if(!query) {
//             return prayers
//         } 
//         return prayers.filter((prayer) => {
//             const prayerName = props.allPrayers.prayer_name_opening;
//             console.log(prayerName)
//             return prayerName.includes(query)
//         })
//     }

//     return (
//         <div>
//             <br></br>
//             <form method='get' onSubmit={filterPrayers()}>
//                 {/* <label>
//                 <span>Search prayers</span>
//                 </label> */}
//                 <input 
//                 type='text'
//                 id='header-search'
//                 placeholder='Search prayers'
//                 name='s'/>
//                 <button type="submit">Search</button>
//             </form>
//         </div>
//     )
// }