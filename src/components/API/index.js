/*base*/
const COHORT_NAME = "2302-ACC-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*login*/



/*register*/



/*posts - fetch posts*/
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

/*new post*/
export const makePost = async (newPostData, token) => {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: newPostData.title,
            description: newPostData.description,
            price: newPostData.price,
            willDeliver: newPostData.willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }


