import "lb-icons/dist/styles.css";

const burgers = Array.prototype.slice.call( document.querySelectorAll( "[class*=burger-]" ) );
const chevrons = Array.prototype.slice.call( document.querySelectorAll( "[class*=chevron-]" ) );
const icons = burgers.concat( chevrons );

for ( let i = 0; i < icons.length; i++ ) {
	const container = document.createElement( "DIV" );
	container.className = "lb-container";
	icons[ i ].appendChild( container )

	container.appendChild( document.createElement( "DIV" ) );
	container.appendChild( document.createElement( "DIV" ) );
	container.appendChild( document.createElement( "DIV" ) );

	if ( icons[ i ].getAttribute( "rounded" ) === "" ) {
		for ( let j = 0; j < icons[ i ].firstChild.children.length; j++ ) {
			icons[ i ].firstChild.children[ j ].style.borderRadius = "50px";
		}
	}
	if ( icons[ i ].getAttribute( "thickness" ) ) {
		for ( let j = 0; j < icons[ i ].firstChild.children.length; j++ ) {
			if ( icons[ i ].classList.contains( "chevron-left" ) || icons[ i ].classList.contains( "chevron-right" ) )
				icons[ i ].firstChild.children[ j ].style.width = icons[ i ].getAttribute( "thickness" );
			else
				icons[ i ].firstChild.children[ j ].style.height = icons[ i ].getAttribute( "thickness" );
		}
	}
	if ( icons[ i ].getAttribute( "duration" ) ) {
		for ( let j = 0; j < icons[ i ].firstChild.children.length; j++ ) {
			icons[ i ].firstChild.children[ j ].style.transitionDuration = icons[ i ].getAttribute( "duration" );
			icons[ i ].firstChild.children[ j ].style.animationDuration = icons[ i ].getAttribute( "duration" );
		}
	}
}