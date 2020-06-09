# lb-icons

## Available classes

- burger-burger / burger-cross
- chevron-left / chevron-right
- chevron-up / chevron-down

## Usage

> npm install --save-dev lb-icons

>require("lb-icons")

```
<div class="burger-burger" thickness="4px" duration="300ms" rounded>
```
```
.burger-burger {
	height: ...px;
	width: ...px;
	transition: color 100ms;
	...

	&:hover {
		color: orange;
	}
}
```

## Note
Just don't use the `transition-duration` property. <br/>
Use instead the one liner `transition: opacity 100ms;`