webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/react-common/lib/react-common.esm.js ***!
  \*******************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, DocumentType, getApolloContext, operationName, parser, resetApolloContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return getApolloContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return operationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return resetApolloContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");



var apolloContext;
function getApolloContext() {
    if (!apolloContext) {
        apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
    }
    return apolloContext;
}
function resetApolloContext() {
    apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
}

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.');
        return props.children(context.client);
    });
};

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}


//# sourceMappingURL=react-common.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js ***!
  \*****************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, RenderPromises, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");








var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.');
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
        var requiredOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(type);
        var usedOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(operation.type);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead."));
    };
    return OperationData;
}());

var QueryData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.previousData = {};
        _this.currentObservable = {};
        _this.runLazy = false;
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.getExecuteResult = function () {
            var result = _this.getQueryResult();
            _this.startQuerySubscription();
            return result;
        };
        _this.obsRefetch = function (variables) {
            return _this.currentObservable.query.refetch(variables);
        };
        _this.obsFetchMore = function (fetchMoreOptions) { return _this.currentObservable.query.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { return _this.currentObservable.query.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { return _this.currentObservable.query.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previousData.query) {
            this.removeQuerySubscription();
            this.previousData.query = query;
        }
        this.updateObservableQuery();
        if (this.isMounted)
            this.startQuerySubscription();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
                    called: false,
                    data: undefined,
                },
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        var obs = this.currentObservable.query;
        var currentResult = obs.getCurrentResult();
        return currentResult.loading ? obs.result() : false;
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = (_a === void 0 ? {} : _a).lazy, lazy = _b === void 0 ? false : _b;
        this.isMounted = true;
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = this.getOptions();
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        delete this.currentObservable.query;
        delete this.previousData.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.variables), this.lazyOptions.variables);
            options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var ssrDisabled = this.getOptions().ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ loading: true, networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previousData.result = ssrLoading;
            return ssrLoading;
        }
        var result;
        if (this.ssrInitiated()) {
            result =
                this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || ssrLoading;
        }
        return result;
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { displayName: displayName, context: options.context, metadata: { reactComponent: { displayName: displayName } } });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        var _a, _b;
        if (this.ssrInitiated()) {
            this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable.query) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previousData.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions), { children: null });
            this.currentObservable.query = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.renderPromises) === null || _b === void 0 ? void 0 : _b.registerSSRObservable(this.currentObservable.query, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable.query) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.prepareObservableQueryOptions()), { children: null });
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
            this.previousData.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .query.setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function () {
        var _this = this;
        if (this.currentObservable.subscription || this.getOptions().skip)
            return;
        var obsQuery = this.currentObservable.query;
        this.currentObservable.subscription = obsQuery.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previousData.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(previousResult.data, data)) {
                    return;
                }
                _this.onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previousData.result;
                if ((previousResult && previousResult.loading) ||
                    !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(error, _this.previousData.error)) {
                    _this.previousData.error = error;
                    _this.onNewData();
                }
            },
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.currentObservable.query.getLastError();
        var lastResult = this.currentObservable.query.getLastResult();
        this.currentObservable.query.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.currentObservable.query, {
            lastError: lastError,
            lastResult: lastResult,
        });
    };
    QueryData.prototype.getQueryResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { data: undefined, error: undefined, loading: false, called: true });
        }
        else {
            var currentResult = this.currentObservable.query.getCurrentResult();
            var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
            var error = currentResult.error, data = currentResult.data;
            if (errors && errors.length > 0) {
                error = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors });
            }
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { loading: loading,
                networkStatus: networkStatus,
                error: error, called: true });
            if (loading) {
                var previousData = this.previousData.result && this.previousData.result.data;
                result.data =
                    previousData && data
                        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, previousData), data) : previousData || data;
            }
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.query.getLastResult() || {})
                        .data,
                });
            }
            else {
                var fetchPolicy = this.currentObservable.query.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    !data &&
                    partial &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading,
                    });
                    result.refetch();
                    return result;
                }
                result.data = data;
            }
        }
        result.client = this.client;
        this.previousData.loading =
            (this.previousData.result && this.previousData.result.loading) || false;
        this.previousData.result = result;
        this.currentObservable.query &&
            this.currentObservable.query.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        var obsQuery = this.currentObservable.query;
        if (!obsQuery || !this.previousData.result)
            return;
        var _a = this.previousData.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError;
            if (this.previousOptions &&
                !this.previousData.loading &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.query, query) &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var observable = this.currentObservable.query;
        return {
            variables: observable.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore,
        };
    };
    return QueryData;
}(OperationData));

function useDeepMemo(memoFn, key) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { query: query }) : { query: query };
    var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    var queryData = queryDataRef.current ||
        new QueryData({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            },
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick,
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

var MutationData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                _this.onMutationError(error, mutationId);
                if (!_this.getOptions().onError)
                    throw error;
            });
        };
        _this.verifyDocumentType(options.mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        result.client = this.refreshClient().client;
        return [this.runMutation, result];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (mutationFunctionOptions) {
        var _a = this.getOptions(), mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, mutationContext = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
        var mutateOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mutationFunctionOptions);
        var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
        delete mutateOptions.variables;
        return this.refreshClient().client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ mutation: mutation,
            optimisticResponse: optimisticResponse, refetchQueries: mutateOptions.refetchQueries || this.getOptions().refetchQueries, awaitRefetchQueries: awaitRefetchQueries,
            update: update, context: mutationContext, fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        var onError = this.getOptions().onError;
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
        if (onError) {
            onError(error);
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
        }
    };
    return MutationData;
}(OperationData));

function useMutation(mutation, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new MutationData({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

var SubscriptionData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var onSubscriptionComplete = this.getOptions().onSubscriptionComplete;
        if (onSubscriptionComplete)
            onSubscriptionComplete();
        this.endSubscription();
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(OperationData));

function useSubscription(subscription, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var updatedOptions = options
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { subscription: subscription }) : { subscription: subscription };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
        loading: !updatedOptions.skip,
        error: undefined,
        data: undefined
    }), result = _a[0], setResult = _a[1];
    var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.afterExecute(); });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.cleanup.bind(subscriptionData); }, []);
    return subscriptionData.execute(result);
}

function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])()).client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.');
    return client;
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());


//# sourceMappingURL=react-hooks.esm.js.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ "./node_modules/@shopify/polaris/dist/styles.css");
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");






var _jsxFileName = "/home/tengku/sample-shopify-app/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_14__["default"]({
  fetchOptions: {
    credentials: 'include'
  }
});

var MyApp = /*#__PURE__*/function (_App) {
  Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var config = {
        apiKey: "0808d1f021555f7021b4ed7536534ef4",
        shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin'),
        forceRedirect: true
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, "Sample App"), __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        config: config,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["AppProvider"], {
        i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_home_tengku_sample_shopify_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vcmVhY3QtY29tbW9uL2xpYi9yZWFjdC1jb21tb24uZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFwb2xsby9yZWFjdC1ob29rcy9saWIvcmVhY3QtaG9va3MuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsImFwaUtleSIsIkFQSV9LRVkiLCJzaG9wT3JpZ2luIiwiQ29va2llcyIsImdldCIsImZvcmNlUmVkaXJlY3QiLCJ0cmFuc2xhdGlvbnMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2U7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSyxpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUssaUJBQWlCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQUs7QUFDaEIsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQSxzQ0FBc0MsWUFBWSxpQkFBaUI7QUFDbkU7QUFDQSxRQUFRLE1BQXFDLEdBQUcsU0FBNEIsR0FBRyw4REFBUztBQUN4RjtBQUNBLGdCQUFnQiw0Q0FBSyx3Q0FBd0MsaUJBQWlCO0FBQzlFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBSztBQUNoQixRQUFRLE1BQXFDLEdBQUcsU0FBdUMsR0FBRyw4REFBUztBQUNuRztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE1BQXFDLEdBQUcsU0FBMkMsR0FBRyw4REFBUztBQUNuRztBQUNBO0FBQ0EsOERBQThELHdDQUF3QyxFQUFFO0FBQ3hHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksTUFBcUMsR0FBRyxTQUM0QixHQUFHLDhEQUFTO0FBQ3BGO0FBQ0E7QUFDQSxJQUFJLE1BQXFDLEdBQUcsU0FBMkUsR0FBRyw4REFBUztBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFxQyxHQUFHLFNBQXNDLEdBQUcsOERBQVM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVxSDtBQUNySDs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RjtBQUNlO0FBQ2hFO0FBQ3VDO0FBQ3hCO0FBQ3JCO0FBQ0c7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RCw4QkFBOEIsMkRBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQXFDLEdBQUcsU0FBc0IsR0FBRyw4REFBUztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFNO0FBQzlCLG9DQUFvQywwRUFBYTtBQUNqRCxnQ0FBZ0MsMEVBQWE7QUFDN0MsUUFBUSxNQUFxQyxHQUFHLFNBQXFDLEdBQUcsOERBQVM7QUFDakc7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtFQUFrRTtBQUM1SCxpREFBaUQseURBQXlEO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELCtEQUErRDtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkRBQWE7QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFRLENBQUMsc0RBQVEsR0FBRztBQUNwRCw4QkFBOEIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBUSxFQUFFLCtCQUErQiwyREFBYSw0RUFBNEU7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUVBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUSxDQUFDLHNEQUFRLEdBQUcsYUFBYSxnRUFBZ0Usa0JBQWtCLDJCQUEyQixFQUFFLEVBQUU7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxzREFBUSxDQUFDLHNEQUFRLEdBQUcsNEJBQTRCLGlCQUFpQjtBQUN4SCxrRkFBa0Ysc0RBQVEsR0FBRztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzREFBUSxDQUFDLHNEQUFRLEdBQUcsMENBQTBDLGlCQUFpQjtBQUN2SCxhQUFhLDJEQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLFlBQVksa0VBQWtFO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBVyxFQUFFLHdCQUF3QjtBQUNqRTtBQUNBLHFCQUFxQixzREFBUSxDQUFDLHNEQUFRLEdBQUcsWUFBWTtBQUNyRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBUSxDQUFDLHNEQUFRLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDJEQUFhO0FBQ3BELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFLO0FBQ3JCLGdCQUFnQiwyREFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGNBQWMsb0RBQU07QUFDcEIseUJBQXlCLDJEQUFLO0FBQzlCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxrQkFBa0Isd0RBQVUsQ0FBQyw2RUFBZ0I7QUFDN0MsYUFBYSx3REFBVSxlQUFlLGNBQWMsRUFBRTtBQUN0RCxtQ0FBbUMsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsZUFBZSxLQUFLO0FBQ3hGLHVCQUF1QixvREFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLG9CQUFvQiw2Q0FBNkM7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtEQUErRCxFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hELEtBQUs7QUFDTCxJQUFJLHVEQUFTLGNBQWMsZ0NBQWdDLGFBQWEsRUFBRSxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsOEJBQThCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1EQUFtRCxpRUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxpRUFBWTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJNQUEyTTtBQUMzTSw0QkFBNEIsc0RBQVEsR0FBRztBQUN2Qyw4Q0FBOEM7QUFDOUM7QUFDQSxrREFBa0Qsc0RBQVEsRUFBRTtBQUM1RDtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBVyxFQUFFLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0JBQWtCLHdEQUFVLENBQUMsNkVBQWdCO0FBQzdDLGFBQWEsc0RBQVEsRUFBRSxnQ0FBZ0M7QUFDdkQsbUNBQW1DLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxhQUFhLHFCQUFxQixLQUFLO0FBQzlGLDBCQUEwQixvREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTLGNBQWMsb0NBQW9DLEVBQUU7QUFDakU7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxtQkFBbUIseUNBQXlDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGtCQUFrQix3REFBVSxDQUFDLDZFQUFnQjtBQUM3QztBQUNBLFVBQVUsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsNkJBQTZCLEtBQUs7QUFDN0UsYUFBYSxzREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOEJBQThCLG9EQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTLGNBQWMsd0NBQXdDLEVBQUU7QUFDckUsSUFBSSx1REFBUyxjQUFjLHdEQUF3RCxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNENBQUssWUFBWSw2RUFBZ0I7QUFDbEQsSUFBSSxNQUFxQyxHQUFHLFNBQW9CLEdBQUcsOERBQVM7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0c7QUFDakc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Z1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLHFEQUFKLENBQWlCO0FBQzlCQyxjQUFZLEVBQUM7QUFDWEMsZUFBVyxFQUFFO0FBREY7QUFEaUIsQ0FBakIsQ0FBZjs7SUFNTUMsSzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFNBRFosZUFDWUEsU0FEWjtBQUVQLFVBQU1DLE1BQU0sR0FBRztBQUFDQyxjQUFNLEVBQUVDLGtDQUFUO0FBQWtCQyxrQkFBVSxFQUFFQyxpREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUE5QjtBQUF5REMscUJBQWEsRUFBRTtBQUF4RSxPQUFmO0FBRUEsYUFDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQU0sZUFBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsRUFLRSxNQUFDLG1FQUFEO0FBQVUsY0FBTSxFQUFFTixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRDtBQUFhLFlBQUksRUFBRU8sOERBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLFNBQUQsdUpBQWVSLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLENBREYsQ0FMRixDQURGO0FBYUQ7Ozs7RUFsQmlCUywrQzs7QUFvQkxaLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTE1MTc5NDJlNjU3MzYyMTZkYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG52YXIgYXBvbGxvQ29udGV4dDtcbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgaWYgKCFhcG9sbG9Db250ZXh0KSB7XG4gICAgICAgIGFwb2xsb0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFwb2xsb0NvbnRleHQ7XG59XG5mdW5jdGlvbiByZXNldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgYXBvbGxvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xufVxuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCA1KSA6IGludmFyaWFudChjb250ZXh0LmNsaWVudCwgJ0Fwb2xsb1Byb3ZpZGVyIHdhcyBub3QgcGFzc2VkIGEgY2xpZW50IGluc3RhbmNlLiBNYWtlICcgK1xuICAgICAgICAgICAgJ3N1cmUgeW91IHBhc3MgaW4geW91ciBjbGllbnQgdmlhIHRoZSBcImNsaWVudFwiIHByb3AuJyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNoaWxkcmVuKSk7XG4gICAgfSk7XG59O1xuXG52YXIgQXBvbGxvQ29uc3VtZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgNikgOiBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb2YgQXBvbGxvQ29uc3VtZXIuICcgK1xuICAgICAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4uJyk7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0LmNsaWVudCk7XG4gICAgfSk7XG59O1xuXG52YXIgRG9jdW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChEb2N1bWVudFR5cGUpIHtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiUXVlcnlcIl0gPSAwXSA9IFwiUXVlcnlcIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiTXV0YXRpb25cIl0gPSAxXSA9IFwiTXV0YXRpb25cIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiU3Vic2NyaXB0aW9uXCJdID0gMl0gPSBcIlN1YnNjcmlwdGlvblwiO1xufSkoRG9jdW1lbnRUeXBlIHx8IChEb2N1bWVudFR5cGUgPSB7fSkpO1xudmFyIGNhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gb3BlcmF0aW9uTmFtZSh0eXBlKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgRG9jdW1lbnRUeXBlLlF1ZXJ5OlxuICAgICAgICAgICAgbmFtZSA9ICdRdWVyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBEb2N1bWVudFR5cGUuTXV0YXRpb246XG4gICAgICAgICAgICBuYW1lID0gJ011dGF0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERvY3VtZW50VHlwZS5TdWJzY3JpcHRpb246XG4gICAgICAgICAgICBuYW1lID0gJ1N1YnNjcmlwdGlvbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBwYXJzZXIoZG9jdW1lbnQpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICBpZiAoY2FjaGVkKVxuICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgIHZhciB2YXJpYWJsZXMsIHR5cGUsIG5hbWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KCEhZG9jdW1lbnQgJiYgISFkb2N1bWVudC5raW5kLCAxKSA6IGludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgXCJBcmd1bWVudCBvZiBcIiArIGRvY3VtZW50ICsgXCIgcGFzc2VkIHRvIHBhcnNlciB3YXMgbm90IGEgdmFsaWQgR3JhcGhRTCBcIiArXG4gICAgICAgIFwiRG9jdW1lbnROb2RlLiBZb3UgbWF5IG5lZWQgdG8gdXNlICdncmFwaHFsLXRhZycgb3IgYW5vdGhlciBtZXRob2QgXCIgK1xuICAgICAgICBcInRvIGNvbnZlcnQgeW91ciBvcGVyYXRpb24gaW50byBhIGRvY3VtZW50XCIpO1xuICAgIHZhciBmcmFnbWVudHMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pO1xuICAgIHZhciBxdWVyaWVzID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JztcbiAgICB9KTtcbiAgICB2YXIgbXV0YXRpb25zID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICB9KTtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIDIpIDogaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgXCJQYXNzaW5nIG9ubHkgYSBmcmFnbWVudCB0byAnZ3JhcGhxbCcgaXMgbm90IHlldCBzdXBwb3J0ZWQuIFwiICtcbiAgICAgICAgXCJZb3UgbXVzdCBpbmNsdWRlIGEgcXVlcnksIHN1YnNjcmlwdGlvbiBvciBtdXRhdGlvbiBhcyB3ZWxsXCIpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCAzKSA6IGludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIGEgcXVlcnksIHN1YnNjcmlwdGlvbiwgb3IgYSBtdXRhdGlvbiBwZXIgSE9DLiBcIiArXG4gICAgICAgIChkb2N1bWVudCArIFwiIGhhZCBcIiArIHF1ZXJpZXMubGVuZ3RoICsgXCIgcXVlcmllcywgXCIgKyBzdWJzY3JpcHRpb25zLmxlbmd0aCArIFwiIFwiKSArXG4gICAgICAgIChcInN1YnNjcmlwdGlvbnMgYW5kIFwiICsgbXV0YXRpb25zLmxlbmd0aCArIFwiIG11dGF0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIik7XG4gICAgdHlwZSA9IHF1ZXJpZXMubGVuZ3RoID8gRG9jdW1lbnRUeXBlLlF1ZXJ5IDogRG9jdW1lbnRUeXBlLk11dGF0aW9uO1xuICAgIGlmICghcXVlcmllcy5sZW5ndGggJiYgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgIHR5cGUgPSBEb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uO1xuICAgIHZhciBkZWZpbml0aW9ucyA9IHF1ZXJpZXMubGVuZ3RoXG4gICAgICAgID8gcXVlcmllc1xuICAgICAgICA6IG11dGF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgID8gbXV0YXRpb25zXG4gICAgICAgICAgICA6IHN1YnNjcmlwdGlvbnM7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgNCkgOiBpbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIG9uZSBkZWZpbml0aW9uIHBlciBIT0MuIFwiICsgZG9jdW1lbnQgKyBcIiBoYWQgXCIgK1xuICAgICAgICAoZGVmaW5pdGlvbnMubGVuZ3RoICsgXCIgZGVmaW5pdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpO1xuICAgIHZhciBkZWZpbml0aW9uID0gZGVmaW5pdGlvbnNbMF07XG4gICAgdmFyaWFibGVzID0gZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zIHx8IFtdO1xuICAgIGlmIChkZWZpbml0aW9uLm5hbWUgJiYgZGVmaW5pdGlvbi5uYW1lLmtpbmQgPT09ICdOYW1lJykge1xuICAgICAgICBuYW1lID0gZGVmaW5pdGlvbi5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9ICdkYXRhJztcbiAgICB9XG4gICAgdmFyIHBheWxvYWQgPSB7IG5hbWU6IG5hbWUsIHR5cGU6IHR5cGUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgY2FjaGUuc2V0KGRvY3VtZW50LCBwYXlsb2FkKTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cblxuZXhwb3J0IHsgQXBvbGxvQ29uc3VtZXIsIEFwb2xsb1Byb3ZpZGVyLCBEb2N1bWVudFR5cGUsIGdldEFwb2xsb0NvbnRleHQsIG9wZXJhdGlvbk5hbWUsIHBhcnNlciwgcmVzZXRBcG9sbG9Db250ZXh0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1jb21tb24uZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgcGFyc2VyLCBvcGVyYXRpb25OYW1lLCBEb2N1bWVudFR5cGUsIGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWNvbW1vbic7XG5leHBvcnQgeyBBcG9sbG9Db25zdW1lciwgQXBvbGxvUHJvdmlkZXIsIGdldEFwb2xsb0NvbnRleHQsIHJlc2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtY29tbW9uJztcbmltcG9ydCB7IF9fZXh0ZW5kcywgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV0d29ya1N0YXR1cywgQXBvbGxvRXJyb3IgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG52YXIgT3BlcmF0aW9uRGF0YSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3BlcmF0aW9uRGF0YShvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7fTtcbiAgICB9XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAobmV3T3B0aW9ucywgc3RvcmVQcmV2aW91cykge1xuICAgICAgICBpZiAoc3RvcmVQcmV2aW91cyA9PT0gdm9pZCAwKSB7IHN0b3JlUHJldmlvdXMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoc3RvcmVQcmV2aW91cyAmJiAhZXF1YWwodGhpcy5vcHRpb25zLCBuZXdPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBPcGVyYXRpb25EYXRhLnByb3RvdHlwZS5yZWZyZXNoQ2xpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xpZW50ID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY2xpZW50KSB8fFxuICAgICAgICAgICAgKHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuY2xpZW50KTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KCEhY2xpZW50LCAyKSA6IGludmFyaWFudCghIWNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb3IgcGFzc2VkIGluIGFzIGFuIG9wdGlvbi4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiAnICtcbiAgICAgICAgICAgICdBcG9sbG9DbGllbnQgaW5zdGFuY2UgaW4gdmlhIG9wdGlvbnMuJyk7XG4gICAgICAgIHZhciBpc05ldyA9IGZhbHNlO1xuICAgICAgICBpZiAoY2xpZW50ICE9PSB0aGlzLmNsaWVudCkge1xuICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgICAgIGlzTmV3OiBpc05ld1xuICAgICAgICB9O1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUudmVyaWZ5RG9jdW1lbnRUeXBlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBwYXJzZXIoZG9jdW1lbnQpO1xuICAgICAgICB2YXIgcmVxdWlyZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZSh0eXBlKTtcbiAgICAgICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgMykgOiBpbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIFwiUnVubmluZyBhIFwiICsgcmVxdWlyZWRPcGVyYXRpb25OYW1lICsgXCIgcmVxdWlyZXMgYSBncmFwaHFsIFwiICtcbiAgICAgICAgICAgIChyZXF1aXJlZE9wZXJhdGlvbk5hbWUgKyBcIiwgYnV0IGEgXCIgKyB1c2VkT3BlcmF0aW9uTmFtZSArIFwiIHdhcyB1c2VkIGluc3RlYWQuXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBPcGVyYXRpb25EYXRhO1xufSgpKTtcblxudmFyIFF1ZXJ5RGF0YSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1ZXJ5RGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWVyeURhdGEoX2EpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBjb250ZXh0ID0gX2EuY29udGV4dCwgb25OZXdEYXRhID0gX2Eub25OZXdEYXRhO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEgPSB7fTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgPSB7fTtcbiAgICAgICAgX3RoaXMucnVuTGF6eSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5ydW5MYXp5UXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgX3RoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgX3RoaXMucnVuTGF6eSA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5sYXp5T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBfdGhpcy5vbk5ld0RhdGEoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0RXhlY3V0ZVJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRRdWVyeVJlc3VsdCgpO1xuICAgICAgICAgICAgX3RoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzUmVmZXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5yZWZldGNoKHZhcmlhYmxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9ic0ZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7IHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5mZXRjaE1vcmUoZmV0Y2hNb3JlT3B0aW9ucyk7IH07XG4gICAgICAgIF90aGlzLm9ic1VwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG1hcEZuKSB7IHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS51cGRhdGVRdWVyeShtYXBGbik7IH07XG4gICAgICAgIF90aGlzLm9ic1N0YXJ0UG9sbGluZyA9IGZ1bmN0aW9uIChwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5zdGFydFBvbGxpbmcocG9sbEludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzU3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5ICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzU3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnN1YnNjcmliZVRvTW9yZShvcHRpb25zKTsgfTtcbiAgICAgICAgX3RoaXMub25OZXdEYXRhID0gb25OZXdEYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2xpZW50KCk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBza2lwID0gX2Euc2tpcCwgcXVlcnkgPSBfYS5xdWVyeTtcbiAgICAgICAgaWYgKHNraXAgfHwgcXVlcnkgIT09IHRoaXMucHJldmlvdXNEYXRhLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2YWJsZVF1ZXJ5KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZClcbiAgICAgICAgICAgIHRoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGVjdXRlU3NyUmVzdWx0KCkgfHwgdGhpcy5nZXRFeGVjdXRlUmVzdWx0KCk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmV4ZWN1dGVMYXp5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMucnVuTGF6eVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5MYXp5UXVlcnksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5yZWFkeSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFt0aGlzLnJ1bkxhenlRdWVyeSwgdGhpcy5leGVjdXRlKCldO1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5mZXRjaERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnNraXAgfHwgb3B0aW9ucy5zc3IgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgb2JzID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSBvYnMuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICByZXR1cm4gY3VycmVudFJlc3VsdC5sb2FkaW5nID8gb2JzLnJlc3VsdCgpIDogZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmFmdGVyRXhlY3V0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmxhenksIGxhenkgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWxhenkgfHwgdGhpcy5ydW5MYXp5KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzT3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy51bm1vdW50LmJpbmQodGhpcyk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQ7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3N1cGVyLnByb3RvdHlwZS5nZXRPcHRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmxhenlPcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLnZhcmlhYmxlcyksIHRoaXMubGF6eU9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmNvbnRleHQpLCB0aGlzLmxhenlPcHRpb25zLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bkxhenkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnNraXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnNzckluaXRpYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQucmVuZGVyUHJvbWlzZXM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldEV4ZWN1dGVTc3JSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzc3JEaXNhYmxlZCA9IHRoaXMuZ2V0T3B0aW9ucygpLnNzciA9PT0gZmFsc2U7XG4gICAgICAgIHZhciBmZXRjaERpc2FibGVkID0gdGhpcy5yZWZyZXNoQ2xpZW50KCkuY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlcztcbiAgICAgICAgdmFyIHNzckxvYWRpbmcgPSBfX2Fzc2lnbih7IGxvYWRpbmc6IHRydWUsIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMubG9hZGluZywgY2FsbGVkOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQsIHN0YWxlOiBmYWxzZSwgY2xpZW50OiB0aGlzLmNsaWVudCB9LCB0aGlzLm9ic2VydmFibGVRdWVyeUZpZWxkcygpKTtcbiAgICAgICAgaWYgKHNzckRpc2FibGVkICYmICh0aGlzLnNzckluaXRpYXRlZCgpIHx8IGZldGNoRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgPSBzc3JMb2FkaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHNzckxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlbmRlclByb21pc2VzLmFkZFF1ZXJ5UHJvbWlzZSh0aGlzLCB0aGlzLmdldEV4ZWN1dGVSZXN1bHQpIHx8IHNzckxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUucHJlcGFyZU9ic2VydmFibGVRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMudmVyaWZ5RG9jdW1lbnRUeXBlKG9wdGlvbnMucXVlcnksIERvY3VtZW50VHlwZS5RdWVyeSk7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IG9wdGlvbnMuZGlzcGxheU5hbWUgfHwgJ1F1ZXJ5JztcbiAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkgJiZcbiAgICAgICAgICAgIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gJ2NhY2hlLWZpcnN0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSwgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LCBtZXRhZGF0YTogeyByZWFjdENvbXBvbmVudDogeyBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgfSB9IH0pO1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5pbml0aWFsaXplT2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSA9IHRoaXMuY29udGV4dC5yZW5kZXJQcm9taXNlcy5nZXRTU1JPYnNlcnZhYmxlKHRoaXMuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gdGhpcy5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEub2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKSwgeyBjaGlsZHJlbjogbnVsbCB9KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQud2F0Y2hRdWVyeShfX2Fzc2lnbih7fSwgb2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucykpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNvbnRleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW5kZXJQcm9taXNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZSh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS51cGRhdGVPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplT2JzZXJ2YWJsZVF1ZXJ5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucygpKSwgeyBjaGlsZHJlbjogbnVsbCB9KTtcbiAgICAgICAgaWYgKCFlcXVhbChuZXdPYnNlcnZhYmxlUXVlcnlPcHRpb25zLCB0aGlzLnByZXZpb3VzRGF0YS5vYnNlcnZhYmxlUXVlcnlPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEub2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgLnF1ZXJ5LnNldE9wdGlvbnMobmV3T2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucylcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5zdGFydFF1ZXJ5U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gfHwgdGhpcy5nZXRPcHRpb25zKCkuc2tpcClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9ic1F1ZXJ5ID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBuZXR3b3JrU3RhdHVzID0gX2EubmV0d29ya1N0YXR1cywgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubG9hZGluZyA9PT0gbG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5uZXR3b3JrU3RhdHVzID09PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgIGVxdWFsKHByZXZpb3VzUmVzdWx0LmRhdGEsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMub25OZXdEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc3Vic2NyaWJlVG9RdWVyeSgpO1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICFlcXVhbChlcnJvciwgX3RoaXMucHJldmlvdXNEYXRhLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25OZXdEYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnJlc3Vic2NyaWJlVG9RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgbGFzdEVycm9yID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5nZXRMYXN0RXJyb3IoKTtcbiAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmdldExhc3RSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnksIHtcbiAgICAgICAgICAgIGxhc3RFcnJvcjogbGFzdEVycm9yLFxuICAgICAgICAgICAgbGFzdFJlc3VsdDogbGFzdFJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldFF1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5vYnNlcnZhYmxlUXVlcnlGaWVsZHMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZGF0YTogdW5kZWZpbmVkLCBlcnJvcjogdW5kZWZpbmVkLCBsb2FkaW5nOiBmYWxzZSwgY2FsbGVkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgIHZhciBsb2FkaW5nID0gY3VycmVudFJlc3VsdC5sb2FkaW5nLCBwYXJ0aWFsID0gY3VycmVudFJlc3VsdC5wYXJ0aWFsLCBuZXR3b3JrU3RhdHVzID0gY3VycmVudFJlc3VsdC5uZXR3b3JrU3RhdHVzLCBlcnJvcnMgPSBjdXJyZW50UmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGN1cnJlbnRSZXN1bHQuZXJyb3IsIGRhdGEgPSBjdXJyZW50UmVzdWx0LmRhdGE7XG4gICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLCBjYWxsZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0RhdGEgPSB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgJiYgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0RhdGEgJiYgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldmlvdXNEYXRhKSwgZGF0YSkgOiBwcmV2aW91c0RhdGEgfHwgZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuZ2V0TGFzdFJlc3VsdCgpIHx8IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRpYWxSZWZldGNoID0gb3B0aW9ucy5wYXJ0aWFsUmVmZXRjaDtcbiAgICAgICAgICAgICAgICBpZiAocGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAgICAgIWRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbCAmJlxuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jbGllbnQgPSB0aGlzLmNsaWVudDtcbiAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEubG9hZGluZyA9XG4gICAgICAgICAgICAodGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ICYmIHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdC5sb2FkaW5nKSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5ICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnJlc2V0UXVlcnlTdG9yZUVycm9ycygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5oYW5kbGVFcnJvck9yQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgICAgICBpZiAoIW9ic1F1ZXJ5IHx8ICF0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdCwgZGF0YSA9IF9hLmRhdGEsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMuZ2V0T3B0aW9ucygpLCBxdWVyeSA9IF9iLnF1ZXJ5LCB2YXJpYWJsZXMgPSBfYi52YXJpYWJsZXMsIG9uQ29tcGxldGVkID0gX2Iub25Db21wbGV0ZWQsIG9uRXJyb3IgPSBfYi5vbkVycm9yO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJldmlvdXNEYXRhLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICBlcXVhbCh0aGlzLnByZXZpb3VzT3B0aW9ucy5xdWVyeSwgcXVlcnkpICYmXG4gICAgICAgICAgICAgICAgZXF1YWwodGhpcy5wcmV2aW91c09wdGlvbnMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkICYmICFlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob25FcnJvciAmJiBlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUub2JzZXJ2YWJsZVF1ZXJ5RmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9ic2VydmFibGUudmFyaWFibGVzLFxuICAgICAgICAgICAgcmVmZXRjaDogdGhpcy5vYnNSZWZldGNoLFxuICAgICAgICAgICAgZmV0Y2hNb3JlOiB0aGlzLm9ic0ZldGNoTW9yZSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiB0aGlzLm9ic1VwZGF0ZVF1ZXJ5LFxuICAgICAgICAgICAgc3RhcnRQb2xsaW5nOiB0aGlzLm9ic1N0YXJ0UG9sbGluZyxcbiAgICAgICAgICAgIHN0b3BQb2xsaW5nOiB0aGlzLm9ic1N0b3BQb2xsaW5nLFxuICAgICAgICAgICAgc3Vic2NyaWJlVG9Nb3JlOiB0aGlzLm9ic1N1YnNjcmliZVRvTW9yZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeURhdGE7XG59KE9wZXJhdGlvbkRhdGEpKTtcblxuZnVuY3Rpb24gdXNlRGVlcE1lbW8obWVtb0ZuLCBrZXkpIHtcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCAhZXF1YWwoa2V5LCByZWYuY3VycmVudC5rZXkpKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0geyBrZXk6IGtleSwgdmFsdWU6IG1lbW9GbigpIH07XG4gICAgfVxuICAgIHJldHVybiByZWYuY3VycmVudC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBsYXp5KSB7XG4gICAgaWYgKGxhenkgPT09IHZvaWQgMCkgeyBsYXp5ID0gZmFsc2U7IH1cbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgX2EgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICsgMTsgfSwgMCksIHRpY2sgPSBfYVswXSwgZm9yY2VVcGRhdGUgPSBfYVsxXTtcbiAgICB2YXIgdXBkYXRlZE9wdGlvbnMgPSBvcHRpb25zID8gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiBxdWVyeSB9KSA6IHsgcXVlcnk6IHF1ZXJ5IH07XG4gICAgdmFyIHF1ZXJ5RGF0YVJlZiA9IHVzZVJlZigpO1xuICAgIHZhciBxdWVyeURhdGEgPSBxdWVyeURhdGFSZWYuY3VycmVudCB8fFxuICAgICAgICBuZXcgUXVlcnlEYXRhKHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG9uTmV3RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcXVlcnlEYXRhLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICBxdWVyeURhdGEuc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gICAgcXVlcnlEYXRhLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChxdWVyeURhdGEuc3NySW5pdGlhdGVkKCkgJiYgIXF1ZXJ5RGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHF1ZXJ5RGF0YVJlZi5jdXJyZW50ID0gcXVlcnlEYXRhO1xuICAgIH1cbiAgICB2YXIgbWVtbyA9IHtcbiAgICAgICAgb3B0aW9uczogX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZWRPcHRpb25zKSwgeyBvbkVycm9yOiB1bmRlZmluZWQsIG9uQ29tcGxldGVkOiB1bmRlZmluZWQgfSksXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIHRpY2s6IHRpY2ssXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdXNlRGVlcE1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKGxhenkgPyBxdWVyeURhdGEuZXhlY3V0ZUxhenkoKSA6IHF1ZXJ5RGF0YS5leGVjdXRlKCkpOyB9LCBtZW1vKTtcbiAgICB2YXIgcXVlcnlSZXN1bHQgPSBsYXp5XG4gICAgICAgID8gcmVzdWx0WzFdXG4gICAgICAgIDogcmVzdWx0O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcXVlcnlEYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHF1ZXJ5RGF0YVJlZi5jdXJyZW50ID0gcXVlcnlEYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBxdWVyeURhdGEuY2xlYW51cCgpOyB9O1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlEYXRhLmFmdGVyRXhlY3V0ZSh7IGxhenk6IGxhenkgfSk7IH0sIFtcbiAgICAgICAgcXVlcnlSZXN1bHQubG9hZGluZyxcbiAgICAgICAgcXVlcnlSZXN1bHQubmV0d29ya1N0YXR1cyxcbiAgICAgICAgcXVlcnlSZXN1bHQuZXJyb3IsXG4gICAgICAgIHF1ZXJ5UmVzdWx0LmRhdGEsXG4gICAgXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHJldHVybiB1c2VCYXNlUXVlcnkocXVlcnksIG9wdGlvbnMsIHRydWUpO1xufVxuXG52YXIgTXV0YXRpb25EYXRhID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTXV0YXRpb25EYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE11dGF0aW9uRGF0YShfYSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIGNvbnRleHQgPSBfYS5jb250ZXh0LCByZXN1bHQgPSBfYS5yZXN1bHQsIHNldFJlc3VsdCA9IF9hLnNldFJlc3VsdDtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucnVuTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucyA9PT0gdm9pZCAwKSB7IG11dGF0aW9uRnVuY3Rpb25PcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIF90aGlzLm9uTXV0YXRpb25TdGFydCgpO1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uSWQgPSBfdGhpcy5nZW5lcmF0ZU5ld011dGF0aW9uSWQoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tdXRhdGUobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvbkNvbXBsZXRlZChyZXNwb25zZSwgbXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvbkVycm9yKGVycm9yLCBtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmdldE9wdGlvbnMoKS5vbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUob3B0aW9ucy5tdXRhdGlvbiwgRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICAgICAgX3RoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBfdGhpcy5zZXRSZXN1bHQgPSBzZXRSZXN1bHQ7XG4gICAgICAgIF90aGlzLm1vc3RSZWNlbnRNdXRhdGlvbklkID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUodGhpcy5nZXRPcHRpb25zKCkubXV0YXRpb24sIERvY3VtZW50VHlwZS5NdXRhdGlvbik7XG4gICAgICAgIHJlc3VsdC5jbGllbnQgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQ7XG4gICAgICAgIHJldHVybiBbdGhpcy5ydW5NdXRhdGlvbiwgcmVzdWx0XTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuYWZ0ZXJFeGVjdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLnVubW91bnQuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG11dGF0aW9uRnVuY3Rpb25PcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBtdXRhdGlvbiA9IF9hLm11dGF0aW9uLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG9wdGltaXN0aWNSZXNwb25zZSA9IF9hLm9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlID0gX2EudXBkYXRlLCBfYiA9IF9hLmNvbnRleHQsIG11dGF0aW9uQ29udGV4dCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLmF3YWl0UmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXMgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeTtcbiAgICAgICAgdmFyIG11dGF0ZU9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgbXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpO1xuICAgICAgICB2YXIgbXV0YXRlVmFyaWFibGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFyaWFibGVzLCBtdXRhdGVPcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIGRlbGV0ZSBtdXRhdGVPcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5tdXRhdGUoX19hc3NpZ24oeyBtdXRhdGlvbjogbXV0YXRpb24sXG4gICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSwgcmVmZXRjaFF1ZXJpZXM6IG11dGF0ZU9wdGlvbnMucmVmZXRjaFF1ZXJpZXMgfHwgdGhpcy5nZXRPcHRpb25zKCkucmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXM6IGF3YWl0UmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSwgY29udGV4dDogbXV0YXRpb25Db250ZXh0LCBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksIHZhcmlhYmxlczogbXV0YXRlVmFyaWFibGVzIH0sIG11dGF0ZU9wdGlvbnMpKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0LmxvYWRpbmcgJiYgIXRoaXMuZ2V0T3B0aW9ucygpLmlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvbkNvbXBsZXRlZCA9IGZ1bmN0aW9uIChyZXNwb25zZSwgbXV0YXRpb25JZCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldE9wdGlvbnMoKSwgb25Db21wbGV0ZWQgPSBfYS5vbkNvbXBsZXRlZCwgaWdub3JlUmVzdWx0cyA9IF9hLmlnbm9yZVJlc3VsdHM7XG4gICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YSwgZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gbmV3IEFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogZXJyb3JzIH0pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGNhbGxPbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGVkID8gb25Db21wbGV0ZWQoZGF0YSkgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5pc01vc3RSZWNlbnRNdXRhdGlvbihtdXRhdGlvbklkKSAmJiAhaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtdXRhdGlvbklkKSB7XG4gICAgICAgIHZhciBvbkVycm9yID0gdGhpcy5nZXRPcHRpb25zKCkub25FcnJvcjtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3N0UmVjZW50TXV0YXRpb24obXV0YXRpb25JZCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLmdlbmVyYXRlTmV3TXV0YXRpb25JZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5tb3N0UmVjZW50TXV0YXRpb25JZDtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuaXNNb3N0UmVjZW50TXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3N0UmVjZW50TXV0YXRpb25JZCA9PT0gbXV0YXRpb25JZDtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQgJiZcbiAgICAgICAgICAgICghdGhpcy5wcmV2aW91c1Jlc3VsdCB8fCAhZXF1YWwodGhpcy5wcmV2aW91c1Jlc3VsdCwgcmVzdWx0KSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXV0YXRpb25EYXRhO1xufShPcGVyYXRpb25EYXRhKSk7XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoeyBjYWxsZWQ6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pIDogeyBtdXRhdGlvbjogbXV0YXRpb24gfTtcbiAgICB2YXIgbXV0YXRpb25EYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgZnVuY3Rpb24gZ2V0TXV0YXRpb25EYXRhUmVmKCkge1xuICAgICAgICBpZiAoIW11dGF0aW9uRGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBtdXRhdGlvbkRhdGFSZWYuY3VycmVudCA9IG5ldyBNdXRhdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0OiBzZXRSZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXRhdGlvbkRhdGFSZWYuY3VycmVudDtcbiAgICB9XG4gICAgdmFyIG11dGF0aW9uRGF0YSA9IGdldE11dGF0aW9uRGF0YVJlZigpO1xuICAgIG11dGF0aW9uRGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICBtdXRhdGlvbkRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG11dGF0aW9uRGF0YS5hZnRlckV4ZWN1dGUoKTsgfSk7XG4gICAgcmV0dXJuIG11dGF0aW9uRGF0YS5leGVjdXRlKHJlc3VsdCk7XG59XG5cbnZhciBTdWJzY3JpcHRpb25EYXRhID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaXB0aW9uRGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb25EYXRhKF9hKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX2Eub3B0aW9ucywgY29udGV4dCA9IF9hLmNvbnRleHQsIHNldFJlc3VsdCA9IF9hLnNldFJlc3VsdDtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgPSB7fTtcbiAgICAgICAgX3RoaXMuc2V0UmVzdWx0ID0gc2V0UmVzdWx0O1xuICAgICAgICBfdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmdldE9wdGlvbnMoKS5za2lwID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hDbGllbnQoKS5pc05ldykge1xuICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IHRoaXMuZ2V0TG9hZGluZ1Jlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaG91bGRSZXN1YnNjcmliZSA9IHRoaXMuZ2V0T3B0aW9ucygpLnNob3VsZFJlc3Vic2NyaWJlO1xuICAgICAgICBpZiAodHlwZW9mIHNob3VsZFJlc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzaG91bGRSZXN1YnNjcmliZSA9ICEhc2hvdWxkUmVzdWJzY3JpYmUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRSZXN1YnNjcmliZSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzT3B0aW9ucykubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgKHRoaXMucHJldmlvdXNPcHRpb25zLnN1YnNjcmlwdGlvbiAhPT0gdGhpcy5nZXRPcHRpb25zKCkuc3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICAgICAgICAgIWVxdWFsKHRoaXMucHJldmlvdXNPcHRpb25zLnZhcmlhYmxlcywgdGhpcy5nZXRPcHRpb25zKCkudmFyaWFibGVzKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zLnNraXAgIT09IHRoaXMuZ2V0T3B0aW9ucygpLnNraXApKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQgPSB0aGlzLmdldExvYWRpbmdSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLnN0YXJ0U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3VycmVudFJlc3VsdCksIHsgdmFyaWFibGVzOiB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXMgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5hZnRlckV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW5kU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5IHx8IHRoaXMuZ2V0T3B0aW9ucygpLnNraXAgPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucy5mZXRjaFBvbGljeVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnN0YXJ0U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdGhpcy51cGRhdGVDdXJyZW50RGF0YS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IHRoaXMudXBkYXRlRXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlU3Vic2NyaXB0aW9uLmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5nZXRMb2FkaW5nUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS51cGRhdGVDdXJyZW50RGF0YSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIG9uU3Vic2NyaXB0aW9uRGF0YSA9IHRoaXMuZ2V0T3B0aW9ucygpLm9uU3Vic2NyaXB0aW9uRGF0YTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvblN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIG9uU3Vic2NyaXB0aW9uRGF0YSh7XG4gICAgICAgICAgICAgICAgY2xpZW50OiB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQsXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5jb21wbGV0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uU3Vic2NyaXB0aW9uQ29tcGxldGUgPSB0aGlzLmdldE9wdGlvbnMoKS5vblN1YnNjcmlwdGlvbkNvbXBsZXRlO1xuICAgICAgICBpZiAob25TdWJzY3JpcHRpb25Db21wbGV0ZSlcbiAgICAgICAgICAgIG9uU3Vic2NyaXB0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5lbmRTdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmVuZFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uRGF0YTtcbn0oT3BlcmF0aW9uRGF0YSkpO1xuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIHVwZGF0ZWRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiB9KSA6IHsgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6ICF1cGRhdGVkT3B0aW9ucy5za2lwLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciBzdWJzY3JpcHRpb25EYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9uRGF0YVJlZigpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25EYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkRhdGFSZWYuY3VycmVudCA9IG5ldyBTdWJzY3JpcHRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB1cGRhdGVkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHNldFJlc3VsdDogc2V0UmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uRGF0YVJlZi5jdXJyZW50O1xuICAgIH1cbiAgICB2YXIgc3Vic2NyaXB0aW9uRGF0YSA9IGdldFN1YnNjcmlwdGlvbkRhdGFSZWYoKTtcbiAgICBzdWJzY3JpcHRpb25EYXRhLnNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMsIHRydWUpO1xuICAgIHN1YnNjcmlwdGlvbkRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbkRhdGEuYWZ0ZXJFeGVjdXRlKCk7IH0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb25EYXRhLmNsZWFudXAuYmluZChzdWJzY3JpcHRpb25EYXRhKTsgfSwgW10pO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb25EYXRhLmV4ZWN1dGUocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gdXNlQXBvbGxvQ2xpZW50KCkge1xuICAgIHZhciBjbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSkuY2xpZW50O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChjbGllbnQsIDEpIDogaW52YXJpYW50KGNsaWVudCwgJ05vIEFwb2xsbyBDbGllbnQgaW5zdGFuY2UgY2FuIGJlIGZvdW5kLiBQbGVhc2UgZW5zdXJlIHRoYXQgeW91ICcgK1xuICAgICAgICAnaGF2ZSBjYWxsZWQgYEFwb2xsb1Byb3ZpZGVyYCBoaWdoZXIgdXAgaW4geW91ciB0cmVlLicpO1xuICAgIHJldHVybiBjbGllbnQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZWZhdWx0UXVlcnlJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlZW46IGZhbHNlLFxuICAgICAgICBvYnNlcnZhYmxlOiBudWxsXG4gICAgfTtcbn1cbnZhciBSZW5kZXJQcm9taXNlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuZGVyUHJvbWlzZXMoKSB7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5xdWVyeUluZm9UcmllID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUucmVnaXN0ZXJTU1JPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9ic2VydmFibGUsIHByb3BzKSB7XG4gICAgICAgIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5nZXRTU1JPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhwcm9wcykub2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5hZGRRdWVyeVByb21pc2UgPSBmdW5jdGlvbiAocXVlcnlJbnN0YW5jZSwgZmluaXNoKSB7XG4gICAgICAgIHZhciBpbmZvID0gdGhpcy5sb29rdXBRdWVyeUluZm8ocXVlcnlJbnN0YW5jZS5nZXRPcHRpb25zKCkpO1xuICAgICAgICBpZiAoIWluZm8uc2Vlbikge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLnNldChxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHF1ZXJ5SW5zdGFuY2UuZmV0Y2hEYXRhKCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmhhc1Byb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVByb21pc2VzLnNpemUgPiAwO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmNvbnN1bWVBbmRBd2FpdFByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHByb21pc2UsIHF1ZXJ5SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIF90aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlKS5zZWVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5sb29rdXBRdWVyeUluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mb1RyaWUgPSB0aGlzLnF1ZXJ5SW5mb1RyaWU7XG4gICAgICAgIHZhciBxdWVyeSA9IHByb3BzLnF1ZXJ5LCB2YXJpYWJsZXMgPSBwcm9wcy52YXJpYWJsZXM7XG4gICAgICAgIHZhciB2YXJNYXAgPSBxdWVyeUluZm9UcmllLmdldChxdWVyeSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIXF1ZXJ5SW5mb1RyaWUuaGFzKHF1ZXJ5KSlcbiAgICAgICAgICAgIHF1ZXJ5SW5mb1RyaWUuc2V0KHF1ZXJ5LCB2YXJNYXApO1xuICAgICAgICB2YXIgdmFyaWFibGVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGluZm8gPSB2YXJNYXAuZ2V0KHZhcmlhYmxlc1N0cmluZykgfHwgbWFrZURlZmF1bHRRdWVyeUluZm8oKTtcbiAgICAgICAgaWYgKCF2YXJNYXAuaGFzKHZhcmlhYmxlc1N0cmluZykpXG4gICAgICAgICAgICB2YXJNYXAuc2V0KHZhcmlhYmxlc1N0cmluZywgaW5mbyk7XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbmRlclByb21pc2VzO1xufSgpKTtcblxuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMsIHVzZUFwb2xsb0NsaWVudCwgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtaG9va3MuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvZGlzdC9zdHlsZXMuY3NzJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnQHNob3BpZnkvcG9sYXJpcy9sb2NhbGVzL2VuLmpzb24nO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWJvb3N0JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBmZXRjaE9wdGlvbnM6e1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgfVxufSlcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb25maWcgPSB7YXBpS2V5OiBBUElfS0VZLCBzaG9wT3JpZ2luOiBDb29raWVzLmdldCgnc2hvcE9yaWdpbicpLCBmb3JjZVJlZGlyZWN0IDp0cnVlfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TYW1wbGUgQXBwPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxQcm92aWRlciBjb25maWc9e2NvbmZpZ30+XG4gICAgICAgICAgPEFwcFByb3ZpZGVyIGkxOG49e3RyYW5zbGF0aW9uc30+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0FwcFByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9