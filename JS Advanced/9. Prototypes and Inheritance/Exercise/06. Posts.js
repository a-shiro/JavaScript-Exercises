function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` +
                `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length === 0) {
                return `Post: ${this.title}\n` +
                    `Content: ${this.content}\n` +
                    `Rating: ${this.likes - this.dislikes}`;
            }

            let result = `Post: ${this.title}\n` +
                `Content: ${this.content}\n` +
                `Rating: ${this.likes - this.dislikes}\n` +
                `Comments:\n`;

            for (let comment of this.comments) {
                result += ` * ${comment}\n`;
            }

            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;

            return this;
        }

        toString() {
            return `Post: ${this.title}\n` +
                `Content: ${this.content}\n` +
                `Views: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const classes = solve();

let post = new classes.Post("Post", "Content");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!