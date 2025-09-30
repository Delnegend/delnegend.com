import { cn } from '~/lib/utils'

export { default as Button } from './Button.vue'

export enum ButtonVariant {
	Default = 'default',
	Outline = 'outline',
	Secondary = 'secondary',
	Destructive = 'destructive',
	Ghost = 'ghost',
	Link = 'link'
}

export enum ButtonSize {
	Default = 'default',
	Sm = 'sm',
	Lg = 'lg',
	Icon = 'icon'
}

export function buttonVariants(props: {
	classes?: string
	variant?: ButtonVariant
	size?: ButtonSize
}) {
	const {
		classes,
		variant = ButtonVariant.Default,
		size = ButtonSize.Default
	} = props
	return cn(
		"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:-translate-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:-translate-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		{
			[ButtonVariant.Default]:
				'bg-primary text-primary-foreground hover:bg-primary/90',
			[ButtonVariant.Outline]:
				'border-4 border-double bg-background shadow-md hover:bg-accent hover:text-accent-foreground hover:shadow-lg active:bg-accent active:text-accent-foreground active:shadow-lg dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
			[ButtonVariant.Secondary]:
				'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			[ButtonVariant.Destructive]:
				'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
			[ButtonVariant.Ghost]:
				'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
			[ButtonVariant.Link]:
				'text-primary underline-offset-4 hover:underline'
		}[variant],
		{
			[ButtonSize.Default]: 'h-9 px-4 py-2 has-[>svg]:px-3',
			[ButtonSize.Sm]: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
			[ButtonSize.Lg]: 'h-10 px-6 has-[>svg]:px-4',
			[ButtonSize.Icon]: 'size-9'
		}[size],
		classes
	)
}
