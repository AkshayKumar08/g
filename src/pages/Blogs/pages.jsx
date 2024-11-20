import React, { useState } from 'react';

const Blog = () => {
    const [blogs] = useState([
        { name: 'uber', url: 'https://www.uber.com/en-US/blog/engineering/', image: '/images/uber.png' },
        { name: 'aws', url: 'https://aws.amazon.com/blogs/', image: '/images/aws.png' },
        { name: 'google for developer', url: 'https://developers.googleblog.com/en/', image: '/images/google.png' },
        { name: 'netflix', url: 'https://netflixtechblog.com/', image: '/images/netflix.png' },
        { name: 'facebook', url: 'https://engineering.fb.com/', image: '/images/meta.png' },
        { name: 'databricks', url: 'https://databricks.com/blog', image: '/images/databricks.png' },
        { name: 'linkedIn', url: 'https://engineering.linkedin.com/blog', image: '/images/linkedin.png' },
        { name: 'github', url: 'https://github.blog/', image: '/images/github.png' },
        { name: 'spotify', url: 'https://engineering.atspotify.com/', image: '/images/spotify.png' },
        { name: 'instagram', url: 'https://instagram-engineering.com/', image: '/images/instagram.png' },
        { name: 'airbnb', url: 'https://airbnb.io/', image: '/images/airbnb.png' },
        { name: 'slack', url: 'https://slack.engineering/', image: '/images/slack.png' },
        { name: 'devto', url: 'https://dev.to/', image: '/images/devto.png' },
        { name: 'ebay', url: 'https://tech.ebayinc.com/', image: '/images/ebay.png' },
        { name: 'reddit', url: 'https://redditblog.com/', image: '/images/reddit.png' },
        { name: 'soundcloud', url: 'https://developers.soundcloud.com/blog/', image: '/images/soundcloud.png' },
        { name: 'twitter', url: 'https://blog.x.com/engineering', image: '/images/twitter.png' },
        { name: 'salesforce', url: 'https://engineering.salesforce.com/', image: '/images/salesforce.png' },
        { name: 'medium', url: 'https://medium.engineering/', image: '/images/medium.png' },
        { name: 'quora', url: 'https://quoraengineering.quora.com/', image: '/images/quora.png' },
        { name: 'yelp', url: 'https://engineeringblog.yelp.com/', image: '/images/yelp.png' },
        { name: 'pinterest', url: 'https://medium.com/pinterest-engineering', image: '/images/pinterest.png' },
        { name: 'etsy', url: 'https://www.etsy.com/codeascraft', image: '/images/etsy.png' },
    ]);

    return (
        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <h1 className="text-2xl font-bold" style={{ textAlign: 'left' }}>Engineering Blogs</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {blogs.map((blog, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
                        <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {blog.image && <img src={blog.image} alt={blog.name} style={{ width: '100%', height: 'auto', marginBottom: '8px' }} />}
                            <h2>{blog.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;