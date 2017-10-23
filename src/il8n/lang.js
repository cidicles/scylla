import LocalizedStrings from 'react-localization';

export const lang = new LocalizedStrings( {
	en: {
		brand: 'Scylla',
		chooseRegion: 'Language',
		loading: 'Loading',
		toggleMenu: 'Toggle Menu',
		warnings: {
			enableIframes: 'You Must Enable iFrames to view this video'
		},
		helmet: {
			siteTitle: ' 😈 '
		},
		login: {
			title: 'Login',
			submit: 'Submit',
			username: 'Username',
			password: 'Password'
		},
		list: {
			title: 'List',
			list: [
				{
					title: 'Local List Content',
					tagline: 'Some Tagline.'
        }
      ]
		},
		navigation: {
			mainmenu: [
				{
					type: 'internal',
					href: '/',
					display: 'Home'
        },
				{
					type: 'internal',
					href: '/list',
					display: 'List'
        },
				{
					type: 'internal',
					href: '/videos',
					display: 'Videos'
        },
				{
					type: 'internal',
					href: '/posts',
					display: 'Posts'
        },
				{
					type: 'internal',
					href: '/login',
					display: 'Login'
        }
      ]
		},
		footer: {
			brand: 'Scylla',
			placeholder: 'Placeholder link',
			terms: 'Terms of Service',
			copy: 'No one at all.',
			placeholderHref: '#'
		},
		home: {
			title: 'Home'
		},
		posts: {
			title: 'Posts',
		},
		post: {
			title: 'Post'
		},
		videos: {
			title: 'Videos',
			playVideo: 'Play Video',
			videos: [
        [
					{
						title: 'Obligatory Big Buck Bunny',
						desc: 'Video Desc',
						video: `http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4`,
						type: 'default',
						poster: 'https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217'
          },
					{
						title: 'Obligatory Rick Roll',
						desc: 'Video Desc',
						video: 'dQw4w9WgXcQ',
						type: 'youtube'
          },
					{
						title: 'Obligatory Rick Roll',
						desc: 'Video Desc',
						video: 'dQw4w9WgXcQ',
						type: 'youtube'
          },
					{
						title: 'Obligatory Rick Roll',
						desc: 'Video Desc',
						video: 'dQw4w9WgXcQ',
						type: 'youtube'
          },
					{
						title: 'Obligatory Rick Roll',
						desc: 'Video Desc',
						video: 'dQw4w9WgXcQ',
						type: 'youtube'
          }
        ]
      ]
		},
		nomatch: {
			title: 'Page Not Found'
		}
	}
} );
