# lb-icons

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
Just don't use the `transition-duration` property.
Use instead the one liner `transition: opacity 100ms;`