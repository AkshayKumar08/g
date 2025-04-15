import React, { useState } from 'react';

const Blog = () => {
    const [blogs] = useState([
        { name: 'ACL', url: 'https://2024.aclweb.org/program/best_papers/', image: '/g/images/acl.png' },
        { name: 'NAACL', url: 'https://2025.naacl.org/', image: '/g/images/naacl.png' },
        { name: 'EMNLP', url: 'https://2025.emnlp.org/', image: '/g/images/emnlp.png' },
        { name: 'anthropic', url: 'https://alignment.anthropic.com/', image: '/g/images/anthropic.png' },
        { name: 'uber', url: 'https://www.uber.com/en-US/blog/engineering/', image: '/g/images/uber.png' },
        { name: 'adobe', url: 'https://blog.developer.adobe.com/tagged/adobe-engineering', image: '/g/images/adobe.png' },
        { name: 'aws', url: 'https://aws.amazon.com/blogs/', image: '/g/images/aws.png' },
        { name: 'google for developer', url: 'https://developers.googleblog.com/en/', image: '/g/images/google.png' },
        { name: 'netflix', url: 'https://netflixtechblog.com/', image: '/g/images/netflix.png' },
        { name: 'facebook', url: 'https://engineering.fb.com/', image: '/g/images/meta.png' },
        { name: 'databricks', url: 'https://databricks.com/blog', image: '/g/images/databricks.png' },
        { name: 'linkedIn', url: 'https://engineering.linkedin.com/blog', image: '/g/images/linkedin.png' },
        { name: 'github', url: 'https://github.blog/', image: '/g/images/github.png' },
        { name: 'spotify', url: 'https://engineering.atspotify.com/', image: '/g/images/spotify.png' },
        { name: 'instagram', url: 'https://instagram-engineering.com/', image: '/g/images/instagram.png' },
        { name: 'airbnb', url: 'https://airbnb.io/', image: '/g/images/airbnb.png' },
        { name: 'slack', url: 'https://slack.engineering/', image: '/g/images/slack.png' },
        { name: 'devto', url: 'https://dev.to/', image: '/g/images/devto.png' },
        { name: 'ebay', url: 'https://tech.ebayinc.com/', image: '/g/images/ebay.png' },
        { name: 'reddit', url: 'https://redditblog.com/', image: '/g/images/reddit.png' },
        { name: 'soundcloud', url: 'https://developers.soundcloud.com/blog/', image: '/g/images/soundcloud.png' },
        { name: 'twitter', url: 'https://blog.x.com/engineering', image: '/g/images/twitter.png' },
        { name: 'salesforce', url: 'https://engineering.salesforce.com/', image: '/g/images/salesforce.png' },
        { name: 'medium', url: 'https://medium.engineering/', image: '/g/images/medium.png' },
        { name: 'quora', url: 'https://quoraengineering.quora.com/', image: '/g/images/quora.png' },
        { name: 'yelp', url: 'https://engineeringblog.yelp.com/', image: '/g/images/yelp.png' },
        { name: 'pinterest', url: 'https://medium.com/pinterest-engineering', image: '/g/images/pinterest.png' },
        { name: 'etsy', url: 'https://www.etsy.com/codeascraft', image: '/g/images/etsy.png' },
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