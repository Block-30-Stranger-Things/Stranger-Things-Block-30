/*base*/
const COHORT_NAME = "2302-ACC-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*login*/



/*register*/



/*posts*/
export const fetchAllPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
      const postsData = await response.json();
      console.log("Posts", postsData);
      return postsData.data.posts

    } catch (error) {
      console.error(error);
    }
  }



