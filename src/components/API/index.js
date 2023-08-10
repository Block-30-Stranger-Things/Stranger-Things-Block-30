/*base*/
const COHORT_NAME = "2302-ACC-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*login*/
export const login = async (userName, password) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: userName,
            password: password
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


/*register*/
export const registerUser = async (registerUserName, registerPassword) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: registerUserName,
            password: registerPassword
          }
        })
      });
      const result = await response.json();t
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }



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