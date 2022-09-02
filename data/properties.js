const allProperties = [
    {
        name:"Lorem",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'Suspendisse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'tristique',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'dapibus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    {
        name:'Nulla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.'
    },
    
]

export default allProperties;