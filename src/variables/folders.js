let folders = {
	introduction: {
		name: 'introduction',
		dateCreated: Date.now(),
		lastSelected: Date.now(),
		timesSelected: 1,
		background: '',
		folders: {
			images: {
				name: 'images',
				dateCreated: Date.now(),
				lastSelected: Date.now(),
				timesSelected: 1,
				background: '',
				folders: {},
				notes: {
					welcome: {
						title: 'welcome',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: 'This is the content',
					},
					'note 2': {
						title: 'Note 2',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: '',
					},
				},
				folderColor: '#4FC12F',
				sortFolders: 'RECENT',
				sortNotes: 'date',
			},
			videos: {
				name: 'videos',
				dateCreated: Date.now(),
				lastSelected: Date.now(),
				timesSelected: 1,
				background: '',
				folders: {},
				notes: {
					'note 1': {
						title: 'Note 1',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: 'This is the content',
					},
					'note 2': {
						title: 'Note 2',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: '',
					},
				},
				folderColor: '#355BC9',
				sortFolders: 'RECENT',
				sortNotes: 'date',
			},
			lists: {
				name: 'lists',
				dateCreated: Date.now(),
				lastSelected: Date.now(),
				timesSelected: 1,
				background: '',
				folders: {},
				notes: {
					'note 1': {
						title: 'Note 1',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: 'This is the content',
					},
					'note 2': {
						title: 'Note 2',
						dateCreated: Date.now(),
						lastSelected: '',
						timesSelected: 0,
						noteOutline: 'grey',
						content: '',
					},
				},
				folderColor: '#FFA300',
				sortFolders: 'RECENT',
				sortNotes: 'date',
			},
		},

		notes: {
			hello: {
				title: 'hello',
				dateCreated: Date.now(),
				lastSelected: '',
				timesSelected: 0,
				noteOutline: 'grey',
				content:
					'<p>Welcome to Note Taker!</p><br/><p>An easy yet efficient way to take all types of notes!</p>',
			},
			evernote: {
				title: 'evernote',
				dateCreated: Date.now(),
				lastSelected: '',
				timesSelected: 0,
				noteOutline: 'grey',
				content: '<p>Who needs evernote right?<br></p>',
			},
		},
		folderColor: '#355BC9',
		settings : { sortFolders: 'date', sortNotes: 'date' }
	},
}

export default folders
