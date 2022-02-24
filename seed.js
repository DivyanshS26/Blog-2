const Blog = require('./models/blog');

const blogs = [
    {
        name: 'David Matthew',
        title: 'Dogs',
        desc: 'blog on dog',
        blog: 'When puppies aren’t playing or eating, they are sleeping. Sleep is an important part of a puppy’s life because most growing occurs during this time. Also, a well-rested puppy is a healthy puppy. You want to make sure that your puppy is comfortable and has a bed to call his own.'
    },
    {
        name: 'Matt Schmit',
        title: 'Cats',
        desc: 'blog on cat',
        blog: 'Holy Meow! Our cat blog lets you dig your claws into the latest news, information, tips and products that are breaking in the world of cats. PetGuide.com is always on the prowl for what cat lovers need to know to keep their cats healthy and happy.'
    },
    {
        name: 'Matthew LeBlanc',
        title: 'Parrots',
        desc: 'blog on parrot',
        blog: 'Seeds and grains are a natural part of a Parrot’s diet, but as with all things, they should be fed in moderation. Many seeds have a higher fat content, so feeding them as the main part of your bird’s diet will often lead to an imbalance of nutrition and potential health problems.'
    },
    {
        name: 'Schmit Perry',
        title: 'Rabbits',
        desc: 'blog on Rabbit',
        blog: 'Did you know rabbits are very fastidious when it comes to personal hygiene. If you observe a bunny closely you will witness their extreme cleaning routine. It is so precise and so lovely to watch them take such great care of themselves and their partners.'
    },
]

const seedDB = async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log('DB Seeded');
}

module.exports = seedDB;