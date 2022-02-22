# Angualr 13

1. Angualr

2. Angualr architecture

3. Angualr working

4. Angualr Cli
	1. ng s
	2. ng s --port
	3. ng b
	4. ng g c
	5. ng g s
	6. ng g m
	7.ng g c -it -inline tempate  -it flag

5.Componenents
	1. class
	2. template
	3. metadate

6.Template Syntax
	1. Interpolation.
	2. Template expressions.
	3. Template statements.
	4. Template reference variables.
	5. Property binding. (component to view)
	6. Event binding. (view to component)
	7. Two-way binding. (both)
	8. Attribute, class, and style bindings (component to view)
	9. Built-in directives
		1. Built-in attribute directives
		2. Built-in structural directives
	10. Template expression operators.
		1. pipe
		2. safe navigation operator(?.)
	11.Binding syntax.
		1.One-way Binding 
			Interpolation, Proparty, Attribute, Class, Style ( data source to view target)
		2.One-way Binding 
			Event( view target to data source)
		3.Two-way Binding 
			Two-way

7.Directives
	1.Components
	2.Attribute directives.
		1.ngClass
		2.ngStyle
		3.ngModel
	3.Structural directives
		1.ngfor
		2.ngIf
		3.ngSwitch
	4.Custom directive
		1.Custom Attribute Directive
		2.Custom Structural Directive

8.Decorators 
	1.Class Decorators 
		1. @ngModule 
			1.properties :
				1.Declarations(components, directives, and pipes local scope ) 
				2.Exports
				3.Imports 
				4.Bootstrap 
				5.Providers(global scope).
		2. @Component

	2.Proparty Decorators 
		1. @Input 
		2. @Output

	3.Methord Decorators
 		1.@HostListaner

	4.Parameter Decorators
		1. @Inject

9.Share data between Componets
	1.Parent to Child: @Input
	2.Child to Parent: @Output() and EventEmitter
	3.Child to Parent: @ViewChild
	4.sibling: Use Serviecs Unrelated Components

10.Element
	1.ng-container
	2.ng-content
	3.ng-template

11.Lifecycle hooks
	1.Constructor()-One time
	2.ngOnChanges() -Every Time
	3.ngOnInit() -One time
	4.ngDoCheck() -Every Time
	5.ngAfterContentInit()-one Time
	6.ngAfterViewInit() -one Time
	7.ngAfterViewChecked() -Every Time
	8.ngOnDestroy() -one time

12. Services
	1. Depenedency injection
	2. Providing service

13. Observables
	1.Angualr use Observables most asyc opertions.
		1.http
		2.Routing
		3.Event handing
	2.methords
		1.next()
		2.error()
		3.complete()
	3.RxJs provides a method called “pipe” to interact with streams
		1.map
		2.fillter
		3.subject - communcate croess component
		4.catchError
	4.creating obserables
	5.subsrbing obserables
	6.Executing obserables
	7.Disposing obserables
	8.operatoers

14.Http module
	1. http client module
	2. GET, POST, PUT, DELETE
	3.Type satety
	4.Request Parameters
	5.HTTP Headers
	6.RxJs operator
		1.map
		2.filter
	7.HTTP Error Handling
	8.Component
	9.Service
	10.Globally
	11.HTTP Interceptors
	12.Progress HTTP Events
	13.HTTP Status Codes

15.Routing 
	1.RouterModule
	2.Configaring Routes
	3.RouterOutlet
	4.Routerlink
	5.Wildcard router
	6.Redirecting router
	7.router parameter
	8.Child Routes / Nested Routes
	9.Relative router (:id)
	10.Types of module loading
		1.Eager loading
		2.Lazy loading
		3.Preloading
	11.Router guads

16.Form
	1.Template-driven forms
		1.form
			1.FormModule
			2.ngForm 
			3.ngModel
			4.ngModelGroup
			5.Tracking state & validity
			6.validation & Error
			7.ngSubmit	
		2.Form validation - Directives
			1.Highligth the errors
			2.Disable the submit button
			3.Custom felid valudation -show/hide Error Message
		3.Set value in template-driven forms
			1.Two-way data binding
				1.Set value default
				2.Set value individually
				3.Reset form
			2.Use the template reference variable
				1.Set value default
				2.Set value individually
				3.Set value of nested FormGroup
				4.patch value
				5.Reset values
	2.Reactive forms
		1.ReactiveFormModule
		2.FormControl
		3.FormGroup
		4.FormArray
		5.setValue 
		6.patch value
		7.from array
		8.ngSubmit
		9.FormBuilder
		10.Grouping form controls
			1.FormGroup with FormControl
			2.FormGroup with FormControl, FormArray, Nexted FormGroup
			3.FormBuilder with FormControl
			4.FormBuilder with FormControl,FormArray, Nexted FormBuilder
		11.Control status CSS classes
			1. .ng-valid
			2. .ng-invalid
			3. .ng-pending
			4. .ng-pristine
  			5. .ng-dirty
			6. .ng-untouched
			7. .ng-touched
			8. .ng-submitted

17. Change Detection
	1.default
	2.onPush
	2.ChangeDetectorRef
		1.detectChanges
		2.markForCheck
		3.detach
18.Animation
19.Angular Material UI 
20. CRUD practice

----------------------------------------------------------------------------------------------------
 ## 1. What is angular ?
  - Angular is a open scroue .
  - Javascpit framework write in typescrpit.
  - purpose is to devalop sigle page application.
  - Angular is compete rewite from agularJS.
  - it is a compoenent based framework for large scle web application.
  - Google maintains it.
  
  ## 2. Angular architecture
  - Angular is a MVC (Modal view controller) Framework.
  

  ## 6.Template Syntax
  
  1. string interpolation
	- dynamic string values into your HTML templates. 
	- one-way data binding (From Component to the View Template). 
	- double curly braces {{propertyName}}
