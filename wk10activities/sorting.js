const hikes = [
    {
      name: "Bechler Falls",
      stub: "bechler_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Yellowstone", "Waterfall"],
      description:
        "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
      trailhead: [44.14457, -110.99781]
    },
    {
      name: "Teton Canyon",
      stub: "teton_canyon",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Tetons"],
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
      trailhead: [43.75567, -110.91521]
    },
    {
      name: "Denanda Falls",
      stub: "denanda_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      tags: ["Moderate", "Yellowstone", "Waterfall"],
      description: "Beautiful hike through Bechler meadows to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
      trailhead: [44.14974, -111.04564]
    },
    {
      name: "Coffee Pot Rapids",
      stub: "coffee_pot",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "2.2 miles",
      tags: ["Easy"],
      description:
        "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
      directions:
        "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
      trailhead: [44.49035, -111.36619]
    },
    {
      name: "Menan Butte",
      stub: "menan_butte",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
      imgAlt: "Image of Menan Butte",
      distance: "3.4 miles",
      tags: ["Moderate", "View"],
      description:
        "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
      directions:
        "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
      trailhead: [43.78555, -111.98996]
    }
  ];
//    const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

//    let simpleSort = simpleList.sort()
//    simpleSort.sort();
//    console.log(simpleSort);
// //the sort is case sensitive.
// //to do anything more we need to provide a compareFunction.
// //here is a definition:
// //  compareFunction(a, b)
// //  return value         sort order
// //     > 0	             sort a after b, e.g. [b, a]
// //     < 0	             sort a before b, e.g. [a, b]
// //     === 0             keep original order of a and b
//     //ascending order
//     function compareFn(a,b) {
//         if (a < b) {
//             return -1;
//         }   else if (a > b) {
//             return 1;
//         }   
//     // a must be equal to b
//        return 0;
//     }
    
//     const anotherSort = simpleList.sort(compareFn)
//     anotherSort.sort();
//     console.log(anotherSort);
//     //descending order
//     function compareFn(a,b) {
//         if (a > b) {
//             return -1;
//         }   else if (a < b) {
//             return 1;
//         }   
//     // a must be equal to b
//        return 0;
//     }
//     //const anotherSort = simpleList.sort(compareFn)
//     anotherSort.sort();
//     console.log(anotherSort);
//activity one:
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
//chatGPT explaination and example
// Ascending order (case-insensitive)
function compareFnAscending(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

// Sort in ascending order
let sortedListAsc = simpleList.sort(compareFnAscending);
console.log('Ascending Order:', sortedListAsc);

// Descending order (case-insensitive)
function compareFnDescending(a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
}

// Sort in descending order
let sortedListDesc = simpleList.sort(compareFnDescending);
console.log('Descending Order:', sortedListDesc);


//Activity two:Filtering
function searchList(list, query) {
    //callback is responsible for checking each item in the list
    //to see if it matches the query.
    function searchCallback(string) {
      //Fix your callback function so that character case does not matter.
      return string.toLowerCase().includes(query.toLowerCase());
    }
    return list.filter(searchCallback);
  }
  //searches whatever letter is inside the " "
  console.log(searchList(simpleList, "b"));
  console.log(searchList(simpleList, "an"));
  console.log(searchList(simpleList, "G"));
  console.log(searchList(simpleList, "es"));
  console.log(searchList(simpleList, "o"));

  //activity 3: sorting and filtering a list of objects.
  
  //this is the main function. It takes two parameters.
  //a list = array of hike objects
  //query = what you are going to search for
  // function searchList(list, query) {
  //   //callback is responsible for checking each item in the list
  //   //to see if it matches the query.
  //   function searchCallback(item) {
  //     return (
  //       item.name.toLowerCase().includes(query.toLowerCase()) ||
  //       item.description.toLowerCase().includes(query.toLowerCase()) ||
  //       item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  //     );
  //   }
  //   const filtered = list.filter(searchCallback);

  //   const sorted = filtered.sort((a, b) => a.distance > b.distance);
  //   return sorted;
  // }
  // console.log(searchList(hikes, "yellowstone"));
  // console.log(searchList(hikes, "moderate"));
  // console.log(searchList(hikes, "al"));

  function searchList(list, query) {
    //callback is responsible for checking each item in the list
    //to see if it matches the query.
    function searchCallback(item) {
      return (
        (item.name && item.name.toLowerCase().includes(query.toLowerCase())) || // Check if name exists
        (item.description && item.description.toLowerCase().includes(query.toLowerCase())) || // Check if description exists
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) // Check if tags exist
      );
    }
    const filtered = list.filter(searchCallback);

    const sorted = filtered.sort((a, b) => a.distance > b.distance);
    return sorted;
  }
  console.log(searchList(hikes, "yellowstone"));
  console.log(searchList(hikes, "moderate"));
  console.log(searchList(hikes, "al"));

  //his corrected code:
  // function searchList(list, query) {
  //   //callback is responsible for checking each item in the list
  //   //to see if it matches the query.
  //   function searchCallback(item) {
  //     return item.name.toLowerCase().includes(query.toLowerCase()) ||  
  //       item.description.toLowerCase().includes(query.toLowerCase()) || 
  //       item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())); 
        
  //   }
  //   const filtered = list.filter(searchCallback);

  //   const sorted = filtered.sort((a, b) => a.distance > b.distance);
  //   return sorted;
  // }
  // console.log(searchList(hikes, "yellowstone"));
  // console.log(searchList(hikes, "moderate"));
  // console.log(searchList(hikes, "al"));