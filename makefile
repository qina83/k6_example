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

#iterazioni con opzioni
http-request-options-stage:
	/opt/homebrew/bin/k6 run getting-start/http-request-options-stage.js

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

#trend-multi-vu-threshold
http-request-trend-threshold:
	/opt/homebrew/bin/k6 run custom-metrics/http-request-trend-threshold.js

#------------------------------------------



# scenarios --------------------------

#scenario
scenario:
	/opt/homebrew/bin/k6 run scenarios/scenario.js

scenario-exec:
	/opt/homebrew/bin/k6 run scenarios/scenario-exec.js

scenario-exec-csv:
	/opt/homebrew/bin/k6 run --out csv=result.csv scenarios/scenario-exec.js

scenario-exec-json:
	/opt/homebrew/bin/k6 run --out json=result.json scenarios/scenario-exec.js

scenario-exec-html:
	/opt/homebrew/bin/k6 run scenarios/scenario-exec-html.js

scenario-exec-html-threshold:
	/opt/homebrew/bin/k6 run scenarios/scenario-exec-html-threshold.js

scenario-exec-html-complete:
	/opt/homebrew/bin/k6 run scenarios/scenario-exec-html-complete.js

#------------------------------------------