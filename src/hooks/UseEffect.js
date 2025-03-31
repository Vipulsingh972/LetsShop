import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Inline styles
  const styles = {
    container: {
      width: "400px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      margin: "50px auto",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      color: "#333",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    post: {
      background: "#fff",
      padding: "15px",
      margin: "10px 0",
      borderLeft: "5px solid #007bff",
      borderRadius: "5px",
      textAlign: "left",
    },
    postTitle: {
      margin: "0 0 5px",
      color: "#007bff",
    },
    postBody: {
      margin: 0,
      color: "#555",
    },
    loading: {
      color: "#ff9800",
    },
    error: {
      color: "red",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Posts</h1>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <ul style={styles.list}>
        {posts.map((post) => (
          <li key={post.id} style={styles.post}>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postBody}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
