const gitalk = new Gitalk({
	clientID: '5c0a735102addf09c05e',
	clientSecret: 'b14dcbc8ef0c3190203bfd4c03a3ea5f3319d438',
	repo: 'jianzhiting.github.io',
	owner: 'jianzhiting',
	admin: ['jianzhiting'],
	id: location.pathname,      // Ensure uniqueness and length less than 50
	distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')