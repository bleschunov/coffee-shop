## Atoms


### Title

Font-family is `inherit`, default font-size is `inherit`

Prop | Required | Description
--- | --- | ---
as | true | Any of `h1, h2, h3, h4, h5, h6`
size | true | CSS value of font-size
color | true | CSS value of color
className | false | Any custom classes
children | false | Text content

```javascript
    <Title as='h1' size='16px' color='white'>Our Coffee</Title>
```

### Paragraph

Font-family is `inherit`, default font-size is `inherit`


Prop | Required | Description
--- | --- | ---
color | true | CSS value of color
fontSize | false | CSS value of font-size
className | false | Any custom classes
children | false | Text content

```javascript
    <Paragraph color="white" fontSize="18px">Lorem ipsum...</Paragraph>
```

### Nav

Prop | Required | Description
--- | --- | ---
navItems | true | List of objects representing nav items
color | true | Color of text and icon
className | false | Any custom classes

```javascript
    <Nav navItems=[{
        title: 'Contacts',
        src: 'http://127.0.0.1/contacts.html',
        key: '0'
    }] color="white" />
```

### Img

Prop | Required | Description
--- | --- | ---
src | true | Link to image
alt | false | Alt attribute for img tag
className | false | Any custom classes

```javascript
    <Img src="./landscape.png" alt="Landscape with lake and forest" />
```

### Icon

Prop | Required | Description
--- | --- | ---
name | true | Name of icon from `sprite.svg`
color | true | Color of icon
className | false | Any custom classes

```javascript
    <Icon name="divider" color="white" />
```

### Button

Prop | Required | Description
--- | --- | ---
children | false | Button label
className | false | Any custom classes

```javascript
    <Button>Click me</Button>
```

### Background

Div container with background-image

Prop | Required | Description
--- | --- | ---
img | true | Link to background image
height | true | CSS of height value
children | false | Any children of div container
className | false | Any custom classes 

```javascript
    <Background img="./bgImg.png" height="600px">
        <Button>Click to me</Button>
    </Background>
```

## Molecules

### Card

Prop | Required | Description
--- | --- | ---
img | true | Card image
title | true | Card title
country | true | 
price | true |
isShadow | false | Enables shadow under a card
alt | false | Alt attribute for img tag

```javascript
    <Card 
        img="./brazilianCoffee.png"
        alt="brazilian coffee"
        title="The best coffee from Brazil"
        country="Brazil"
        price="10.99"
        isShadow={true} />
```

### Filters

Prop | Required | Description
--- | --- | ---
onChangeFilters | true | Function
filters | true | An object of relevant filters 
className | false | Any custom classes

```javascript
    <Filters onChangeFilters={onChangeFilters} 
             filters={{
                 country: ['Brazil'],
                 search: '1 kg'
             }} />
```

### Catalogue 

Prop | Required | Description
--- | --- | ---
cards | true | Array of objects representing cards
filters | true | An object of relevant filters
className | false | Any custom classes

```javascript
    <Filters cards={[
                {
                    img: './brazilianCoffee.png',
                    title: 'Brazilian Coffee',
                    country: 'Brazil',
                    price: '10.99',
                    key: '0'
                },
             ]}
             filters={{
                 country: ['Brazil'],
                 search: '1 kg'
             }} />
```

## Organs

### About



