import templateUrl from './blog.html';

export const BlogComponent = {
    templateUrl,
    controller: class BlogComponent {
        constructor(BlogService) {
            'ngInject';
            this.blogService = BlogService;
        }
        $onInit() {
            this.newPost = {
                title: '',
                selected: false
            };
            this.post = [];
            this.blogService.getPosts().then(response => this.post = response);
        }
        addTodo({ post }) {
            if (!post) return;
            this.posts.unshift(post);
            this.newPost = {
                title: '',
                selected: false
            };
        }
    }
};