

window.CLIPPY_CDN = '/assets/addons/clippy/agents/'

    var rex_agent;
    agent = clippy.load('Clippy', function(agent){
        rex_agent = agent;
        // Do anything with the loaded agent
        rex_agent.show();
        console.log(agent.animations());

        rex_agent_fun(rex_agent);

        $(document).on('rex:ready', function() {
            
            rex_agent_fun(rex_agent);

        });
    });

    function rex_agent_fun(agent) {
        var s = "\u2006\u200B";
        var space = s+s+s+s+s+s+s+s+s+s+s+s+s;

        

        $("[href*='delete']:not([href*='package=clippy&function=delete'])").on('click', function() {
            
            agent.stop();
            agent.play("EmptyTrash");

        });

        $("[href='index.php?page=packages']").one('click', function(e) {
        
            e.preventDefault();
            agent.stopCurrent();
            agent.speak('Bitte nochmals klicken...' + space);
            agent.play("GetAttention");

        });
        $("[href='index.php?page=system/settings']").one('click', function(e) {
        
            e.preventDefault();
            agent.stopCurrent();
            agent.speak('Bitte nochmals klicken...' + space);
            agent.play("Thinking");

        });
        $(".btn-save").on('click', function() {
            
            agent.stopCurrent();
            agent.play("Save");

        });
        $(".btn-popup").on('click', function() {
            
            agent.stop();
            agent.play("GetArtsy");

        });
        
        $("#rex-js-nav-main").on('mouseover', function() {
            
            agent.stop();
            agent.play("LookUpRight");

        });
        
        $(".rex-nav-top").on('mouseover', function() {
            
            agent.stop();
            agent.play("LookUp");

        });

        $("[href*='package=clippy&function=deactivate']").on('click', function(e) {
            e.preventDefault(); 
            agent.stop();
            agent.play('GoodBye');
            $(this).html('<a href="index.php?page=packages&amp;package=clippy&amp;function=deactivate&amp;rex-api-call=package&amp;_csrf_token=HSKoaur8GpPvPg7Be4oBK6sV2aPfdqpi0O3fAUUkMDM"><i class="rex-icon rex-icon-package-is-activated"></i> aktivieren</a>');
        });

        $("[href*='package=clippy&function=uninstall']").on('click', function(e) {
            e.preventDefault(); 
            agent.stop();
            agent.play("GetAttention");
            agent.speak('Willst du nicht mehr mein Freund sein?' + space);
        });
                    
                    
        $("[href*='package=clippy&function=delete']").one('click', function(e) {
            e.preventDefault(); 
            agent.stop();
            agent.speak('Willst du wirklich, dass ich gehe? Ich bin doch erst seit 1. April 2019 hier?' + space);
            agent.play("GetAttention");
                
            $("[href*='package=clippy&function=delete']").on('click', function(e) {
                e.preventDefault(); 
                agent.play('GoodBye');
                agent.hide();
                $(this).parent().parent().remove();
            });
        });

        $('input[type="text"]').on('focus', function() {
                
            agent.stop();
            agent.play("Writing");

        });
        
        $('textarea').on('focus', function() {
            
            agent.stop();
            agent.play("Writing");

        });
        $("[href*='index.php?page=content/edit'][href*='function=edit']").on('click', function() {
            agent.stop();
            agent.speak('Anscheinend möchten Sie einen Block editieren...' + space + 'Brauchen Sie Hilfe?' + space);
            agent.play("Writing");

        });
        $(".clippy").on('mouseover', function() {
            agent.stop();

            var h1 = $(".page-header h1")
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();

    var rex_user_name = $(".rex-username")
.clone()    //clone the element
.children() //select all the children
.remove()   //remove all the children
.end()  //again go back to selected element
.text();
    
            var questions = ['Jetzt fühle ich mich wohl.', 'Meine Lieblingsfarbe ist Silverlight.', 'Ist das hier Microsoft Office Typo3?', 'Ist das hier Microsoft Wordpress?','Wo bin ich denn hier gelandet?', 'Ist das hier der Internet Explorer 5?', 'Könnt ihr meinem Freund @slackbot schöne Grüße ausrichten?'
            , 'Ich mache meine Websites immer mit Microsoft Frontpage 2000.', 'Sie sind hier: ' + h1, 'Hallo ' + rex_user_name, 'Das ist aber ein merkwürdiges Windows.', 'Zu meiner Zeit hießen Newsletter noch Serienbriefe...'
            , 'Kommst du zum REXCAMP 2019? Infos dazu findest du auf REDAXO.org' ,'Ist das hier Microsoft Office Joomla for Workstations?','Ist das hier Microsoft Office Drupal 19H1?'];
            
            var rand = Math.floor(Math.random()*questions.length);
            // rand = 2;
            
            agent.speak(questions[rand] + space);
            
            if(rand == 0) {
                $('body').css("font-family", '"Comic Sans MS", cursive');
            }

            if(rand == 1) {
                $('p, a, span, h1, h2, li, td').attr("style", 'background: linear-gradient(to bottom, #bbb 0%, #888 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent');
            }

            if(rand == 2) {
                $('.navbar-brand').html('<img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Logo_TYPO3.svg" height="50" />');
                $('nav.rex-nav-top').attr("style", 'background: lightgrey');

            }

            
        });

        $("[href*='add']").on('click', function() {
            agent.stop();
            agent.play("Congratulate");

        });
        

        
    }