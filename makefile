include .env
export

#getting-start ---------------------------

#chiamata singola
http-request:
	/opt/homebrew/bin/k6 run getting-start/http-request.js

#chiamata singola con errore
http-request-error:
	/opt/homebrew/bin/k6 run getting-start/http-request-error.js

#lifecyle
http-request-lifecycle:
	/opt/homebrew/bin/k6 run getting-start/http-request-lifecycle.js

#iterazioni per un tempo stabilito
http-request-duration:
	/opt/homebrew/bin/k6 run --duration 10s getting-start/http-request.js

#iterazioni per un tempo stabilito con più VU
http-request-vu-duration:
	/opt/homebrew/bin/k6 run --vus 5 --duration 10s getting-start/http-request.js

#iterazioni per un numero stabilito con più VU
http-request-vu-iteration:
	/opt/homebrew/bin/k6 run --vus 5 --iterations 10 getting-start/http-request.js

#iterazioni con opzioni
http-request-options:
	/opt/homebrew/bin/k6 run getting-start/http-request-options.js

#lifecycle - vus - iteartion - env
http-request-complete:
	/opt/homebrew/bin/k6 run getting-start/http-request-complete.js --include-system-env-vars


#------------------------------------------

# custom metrics --------------------------

#trend
http-request-trend:
	/opt/homebrew/bin/k6 run custom-metrics/http-request-trend.js

#trend-multi-vu
http-request-trend-multi-vu:
	/opt/homebrew/bin/k6 run custom-metrics/http-request-trend-multi-vu.js

#trend-multi-vu-check
http-request-trend-check:
	/opt/homebrew/bin/k6 run custom-metrics/http-request-trend-check.js

#------------------------------------------





