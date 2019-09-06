# Best Practices for Readable Code <!-- omit in toc -->

- [Commenting & Documentation](#commenting--documentation)
- [Consistent Indentation](#consistent-indentation)
- [Avoid Obvious Comments](#avoid-obvious-comments)
- [Code Grouping](#code-grouping)
- [Consistent Naming Scheme](#consistent-naming-scheme)
- [DRY Principle](#dry-principle)
- [Avoid Deep Nesting](#avoid-deep-nesting)
- [Limit Line Length](#limit-line-length)
- [File and Folder Organization](#file-and-folder-organization)
- [Consistent Temporary Names](#consistent-temporary-names)
- [Capitalize SQL Special Words](#capitalize-sql-special-words)
- [Separation of Code and Data](#separation-of-code-and-data)
- [Alternate Syntax Inside Templates](#alternate-syntax-inside-templates)
- [Object Oriented vs. Procedural](#object-oriented-vs-procedural)
- [Read Open Source Code](#read-open-source-code)
- [Code Refactoring](#code-refactoring)


## Commenting & Documentation

IDE's (Integrated Development Environment) have come a long way in the past few years. This made commenting your code more useful than ever. Following certain standards in your comments allows IDE's and other tools to utilize them in different ways.


## Consistent Indentation

I assume you already know that you should indent your code. However, it's also worth noting that it is a good idea to keep your indentation style consistent.

There are more than one way of indenting code.

**Style 1**:
```js
function foo() {
    if ($maybe) {
        do_it_now();
        again();
    } else {
        abort_mission();
    }
    finalize();
}
```

**Style 2**:
```js
function foo()
{
    if ($maybe)
    {
        do_it_now();
        again();
    }
    else
    {
        abort_mission();
    }
    finalize();
}
```

**Style 3**:
```js
function foo()
{   if ($maybe)
    {   do_it_now();
        again();
    }
    else
    {   abort_mission();
    }
    finalize();
}
```

I used to code in style #2 but recently switched to #1. But that is only a matter of preference. There is no "best" style that everyone should be following. Actually, the best style, is a consistent style. If you are part of a team or if you are contributing code to a project, you should follow the existing style that is being used in that project.

The indentation styles are not always completely distinct from one another. Sometimes, they mix different rules. For example, in <a href="http://pear.php.net/manual/en/standards.php">PEAR Coding Standards</a>, the opening bracket "{" goes on the same line as <a href="http://pear.php.net/manual/en/standards.control.php">control structures</a>, but they go to the next line after <a href="http://pear.php.net/manual/en/standards.funcdef.php">function definitions</a>.


**PEAR Style**:
```js
function foo()
{                     // placed on the next line
    if ($maybe) {     // placed on the same line
        do_it_now();
        again();
    } else {
        abort_mission();
    }
    finalize();
}
```

Also note that they are using four spaces instead of tabs for indentations.

<a href="http://en.wikipedia.org/wiki/Indent_style">Here</a> is a Wikipedia article with samples of different indent styles.


## Avoid Obvious Comments

Commenting your code is fantastic; however, it can be overdone or just be plain redundant. Take this example:

```js
// get the country code
$country_code = get_country_code($_SERVER['REMOTE_ADDR']);

// if country code is US
if ($country_code == 'US') {

    // display the form input for state
    echo form_input_state();
}
```

When the text is that obvious, it's really not productive to repeat it within comments.

If you must comment on that code, you can simply combine it to a single line instead:

```js
// display state selection for US users
$country_code = get_country_code($_SERVER['REMOTE_ADDR']);
if ($country_code == 'US') {
    echo form_input_state();
}
```


## Code Grouping

More often than not, certain tasks require a few lines of code. It is a good idea to keep these tasks within separate blocks of code, with some spaces between them.

Here is a simplified example:

```js
// get list of forums
$forums = array();
$r = mysql_query("SELECT id, name, description FROM forums");
while ($d = mysql_fetch_assoc($r)) {
    $forums []= $d;
}

// load the templates
load_template('header');
load_template('forum_list',$forums);
load_template('footer');
```

Adding a comment at the beginning of each block of code also emphasizes the visual separation.


## Consistent Naming Scheme

PHP itself is sometimes guilty of not following consistent naming schemes:

- strpos() vs. str_split()
- imagetypes() vs. image_type_to_extension()

First of all, the names should have word boundaries. There are two popular options:

- <strong>camelCase</strong>: First letter of each word is capitalized, except the first word.
- <strong>underscores</strong>: Underscores between words, like: mysql_real_escape_string().

Having different options creates a situation similar to the indent styles, as I mentioned earlier. If an existing project follows a certain convention, you should go with that. Also, some language platforms tend to use a certain naming scheme. For instance, in Java, most code uses camelCase names, while in PHP, the majority of uses underscores.

These can also be mixed. Some developers prefer to use underscores for procedural functions, and class names, but use camelCase for class method names:

```php
class Foo_Bar {

    public function someDummyMethod() {

    }

}
 
function procedural_function_name() {

}
```

So again, there is no obvious "best" style. Just being consistent.


## DRY Principle

DRY stands for Don't Repeat Yourself. Also known as DIE: Duplication is Evil.

The principle states:
"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."

The purpose for most applications (or computers in general) is to automate repetitive tasks. This principle should be maintained in all code, even web applications. The same piece of code should not be repeated over and over again.

For example, most web applications consist of many pages. It's highly likely that these pages will contain common elements. Headers and footers are usually best candidates for this. It's not a good idea to keep copy pasting these headers and footers into every page. Here is Jeffrey Way explaining how to create templates in CodeIgniter.

```php
$this->load->view('includes/header');

$this->load->view($main_content);

$this->load->view('includes/footer');
```


## Avoid Deep Nesting

Too many levels of nesting can make code harder to read and follow.

```php
function do_stuff() {

// ...

    if (is_writable($folder)) {

        if ($fp = fopen($file_path,'w')) {

            if ($stuff = get_some_stuff()) {

                if (fwrite($fp,$stuff)) {

                    // ...

                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
```

For the sake of readability, it is usually possible to make changes to your code to reduce the level of nesting:

```php
function do_stuff() {

// ...

    if (!is_writable($folder)) {
        return false;
    }

    if (!$fp = fopen($file_path,'w')) {
        return false;
    }

    if (!$stuff = get_some_stuff()) {
        return false;
    }

    if (fwrite($fp,$stuff)) {
        // ...
    } else {
        return false;
    }
}
```


## Limit Line Length

Our eyes are more comfortable when reading tall and narrow columns of text.

It is a good practice to avoid writing horizontally long lines of code.

```php
// bad
$my_email->set_from('test@email.com')->add_to('programming@gmail.com')->set_subject('Methods Chained')->set_body('Some long message')->send();

// good
$my_email
    ->set_from('test@email.com')
    ->add_to('programming@gmail.com')
    ->set_subject('Methods Chained')
    ->set_body('Some long message')
    ->send();

// bad
$query = "SELECT id, username, first_name, last_name, status FROM users LEFT JOIN user_posts USING(users.id, user_posts.user_id) WHERE post_id = '123'";

// good
$query = "SELECT id, username, first_name, last_name, status
    FROM users
    LEFT JOIN user_posts USING(users.id, user_posts.user_id)
    WHERE post_id = '123'";
```

Also, if anyone intends to read the code from a terminal window, such as Vim users, it is a good idea to to limit the line length to around 80 characters.


## File and Folder Organization

Technically, you could write an entire application code within a single file. But that would prove to be a nightmare to read and maintain.

During my first programming projects, I knew about the idea of creating "include files." However, I was not yet even remotely organized. I created an "inc" folder, with two files in it: db.php and functions.php. As the applications grew, the functions file also became huge and unmaintainable.

One of the best approaches is to either <a href="http://net.tutsplus.com/sessions/codeigniter-from-scratch/?_ga=2.49567590.1156903650.1525310515-1622938430.1525310515">use a framework</a>, or imitate their folder structure.


## Consistent Temporary Names

Normally, the variables should be descriptive and contain one or more words. But, this doesn't necessarily apply to temporary variables. They can be as short as a single character.

It is a good practice to use consistent names for your temporary variables that have the same kind of role. Here are a few examples that I tend use in my code:

```php
// $i for loop counters
for ($i = 0; $i < 100; $i++) {

    // $j for the nested loop counters
    for ($j = 0; $j < 100; $j++) {

    }
}

// $ret for return variables
function foo() {
    $ret['bar'] = get_bar();
    $ret['stuff'] = get_stuff();

    return $ret;
}

// $k and $v in foreach
foreach ($some_array as $k => $v) {

}

// $q, $r and $d for mysql
$q = "SELECT * FROM table";
$r = mysql_query($q);
while ($d = mysql_fetch_assocr($r)) {

}

// $fp for file pointers
$fp = fopen('file.txt','w');
```


## Capitalize SQL Special Words

Database interaction is a big part of most web applications. If you are writing raw SQL queries, it is a good idea to keep them readable as well.

Even though SQL special words and function names are case insensitive, it is common practice to capitalize them to distinguish them from your table and column names.

```sql
SELECT id, username FROM user;

UPDATE user SET last_login = NOW()
WHERE id = '123'

SELECT id, username FROM user u
LEFT JOIN user_address ua ON(u.id = ua.user_id)
WHERE ua.state = 'NY'
GROUP BY u.id
ORDER BY u.username
LIMIT 0,20
```


## Separation of Code and Data

This is another principle that applies to almost all programming languages in all environments. In the case of web development, the "data" usually implies HTML output.

When PHP was first released many years ago, it was primarily seen as a template engine. It was common to have big HTML files with a few lines of PHP code in between. However, things have changed over the years and websites became more and more dynamic and functional. The code is now a huge part of web applications, and it is no longer a good practice to combine it with the HTML.

You can either apply the principle to your application by yourself, or you can use a third party tool (template engines, frameworks or CMS's) and follow their conventions.

Popular PHP Frameworks:
- [CodeIgniter](http://codeigniter.com/)
- [Zend Framework](http://framework.zend.com/)
- [Cake PHP](http://cakephp.org/)
- [Symfony](http://www.symfony-project.org/)

Popular Template Engines:
- [Smarty](http://www.smarty.net/)
- [Dwoo](http://dwoo.org/)
- [Savant](http://phpsavant.com/)

Popular Content Management Systems


## Alternate Syntax Inside Templates

You may choose not to use a fancy template engine, and instead go with plain inline PHP in your template files. This does not necessarily violate the "Separation of Code and Data," as long as the inline code is directly related to the output, and is readable. In this case you should consider using the <a href="http://php.net/manual/en/control-structures.alternative-syntax.php">alternate syntax for control structures</a>.

Here is an example:
```php
<div class="user_controls">
    <?php if ($user = Current_User::user()): ?>
        Hello, <em><?php echo $user->username; ?></em> <br/>
        <?php echo anchor('logout', 'Logout'); ?>
    <?php else: ?>
        <?php echo anchor('login','Login'); ?> |
        <?php echo anchor('signup', 'Register'); ?>
    <?php endif; ?>
</div>

<h1>My Message Board</h1>

<?php foreach($categories as $category): ?>

    <div class="category">

        <h2><?php echo $category->title; ?></h2>

        <?php foreach($category->Forums as $forum): ?>

            <div class="forum">

                <h3>
                    <?php echo anchor('forums/'.$forum->id, $forum->title) ?>
                    (<?php echo $forum->Threads->count(); ?> threads)
                </h3>

                <div class="description">
                    <?php echo $forum->description; ?>
                </div>

            </div>

        <?php endforeach; ?>

    </div>

<?php endforeach; ?>
```

This lets you avoid lots of curly braces. Also, the code looks and feels similar to the way HTML is structured and indented.


## Object Oriented vs. Procedural

Object oriented programming can help you create well structured code. But that does not mean you need to abandon procedural programming completely. Actually creating a mix of both styles can be good.

Objects should be used for representing data, usually residing in a database.

```php
class User {

    public $username;
    public $first_name;
    public $last_name;
    public $email;

    public function __construct() {
        // ...
    }

    public function create() {
        // ...
    }

    public function save() {
        // ...
    }

    public function delete() {
        // ...
    }

}
```

Procedural functions may be used for specific tasks that can be performed independently.

```php
function capitalize($string) {

    $ret = strtoupper($string[0]);
    $ret .= strtolower(substr($string,1));
    return $ret;

}
```


## Read Open Source Code

Open Source projects are built with the input of many developers. These projects need to maintain a high level of code readability so that the team can work together as efficiently as possible. Therefore, it is a good idea to browse through the source code of these projects to observe what these developers are doing.


## Code Refactoring

When you "refactor," you make changes to the code without changing any of its functionality. You can think of it like a "clean up," for the sake of improving readability and quality.

This doesn't include bug fixes or the addition of any new functionality. You might refactor code that you have written the day before, while it's still fresh in your head, so that it is more readable and reusable when you may potentially look at it two months from now. As the motto says: "refactor early, refactor often."

You may apply any of the "best practices" of code readability during the refactoring process.