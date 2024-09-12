import { expect } from 'chai';
import { createPost, getPostById, updatePost, deletePost, getPosts } from '../../utils/apiClient';

describe('CRUD Operations on Positive testcases', () => {
  
  let createdPostId;

  it('should create a new post (POST /posts)', async () => {

    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await createPost(newPost);

    expect(response.status).to.equal(201);
    expect(response.data).to.include(newPost);

    // Save the created post ID for later tests
    createdPostId = response.data.id;
  });
    
  // Create a new post
  it('should create a new post (POST /posts)', async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await createPost(newPost);

    expect(response.status).to.equal(201);
    expect(response.data).to.include(newPost);

    // Save the created post ID for later tests
    createdPostId = response.data.id;
  });

  // Get all posts
  it('should fetch all posts (GET /posts)', async () => {
    const response = await getPosts();
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });

  // Delete a post
  it('should delete a post (DELETE /posts/:id)', async () => {
    const response = await deletePost(createdPostId);

    expect(response.status).to.equal(200);

    // Verify the post is deleted by trying to fetch it again
    try {
      await getPostById(createdPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }

    it('should create a new post (POST /posts)', async () => {
      const newPost = { title: 'foo', body: 'bar', userId: 1 };
      const response = await createPost(newPost);
  
      expect(response.status).to.equal(201);
      expect(response.data).to.include(newPost);
  
      // Save the created post ID for later tests
      createdPostId = response.data.id;
    });
   
      it('should delete a post (DELETE /posts/:id)', async () => {
        const response = await deletePost(createdPostId);
    
        expect(response.status).to.equal(200);
    
        // Verify the post is deleted by trying to fetch it again
        try {
          await getPostById(createdPostId);
        } catch (error) {
          expect(error.response.status).to.equal(404);
        }
      });
  });

  it('should validate the first post in the posts list (GET /posts)', async () => {
    const response = await getPosts();
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.have.keys(['id', 'title', 'body', 'userId']);
  });

  it('should create a post with maximum field lengths (POST /posts)', async () => {
    const maxLengthPost = { title: 'a'.repeat(255), body: 'b'.repeat(1000), userId: 1 };
    const response = await createPost(maxLengthPost);
    expect(response.status).to.equal(201);
    expect(response.data).to.include(maxLengthPost);
  });

});     

describe('CRUD Operations on Posts (Negative Tests)', () => {
  
  let invalidPostId = 999999; // Assume this ID doesn't exist
  
  // 1. Negative Test: Attempt to create a post with missing fields
  it('should fail to create a post with missing fields (POST /posts)', async () => {
    const incompletePost = { title: '' };  // Missing 'body' and 'userId'

    try {
      const response = await createPost(incompletePost);
    } catch (error) {
      expect(error.response.status).to.equal(400);  // Expect a 400 Bad Request
      console.error('Create Post Error:', error.response.data);
    }
  });

  // 2. Negative Test: Attempt to fetch a non-existent post
  it('should return 404 for non-existent post (GET /posts/:id)', async () => {
    try {
      const response = await getPostById(invalidPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);  // Expect a 404 Not Found
      console.error('Get Post Error:', error.response.data);
    }
  });

  // 3. Negative Test: Attempt to update a post with invalid data
  it('should fail to update a post with invalid data (PUT /posts/:id)', async () => {
    const invalidUpdate = { title: '', body: '', userId: 'abc' };  // Invalid userId and empty fields

    try {
      const response = await updatePost(invalidPostId, invalidUpdate);
    } catch (error) {
      expect(error.response.status).to.equal(500);  // Expect a 400 Bad Request
      console.error('Update Post Error:', error.response.data);
    }
  });

  // 4. Negative Test: Attempt to delete a non-existent post
  it('should return 404 for non-existent post when trying to delete (DELETE /posts/:id)', async () => {
    try {
      const response = await deletePost(invalidPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);  // Expect a 404 Not Found
      console.error('Delete Post Error:', error.response.data);
    }
  });

  it('should fail to create a post with invalid userId (POST /posts)', async () => {
    const invalidUserIdPost = { title: 'foo', body: 'bar', userId: 'invalid' };
    try {
      await createPost(invalidUserIdPost);
    } catch (error) {
      expect(error.response.status).to.equal(400);
    }
  });

  it('should fail to create a post with a large body (POST /posts)', async () => {
    const largeBodyPost = { title: 'foo', body: 'a'.repeat(10001), userId: 1 }; // Assuming limit is 10000 chars
    try {
      await createPost(largeBodyPost);
    } catch (error) {
      expect(error.response.status).to.equal(413);
    }
  });



});