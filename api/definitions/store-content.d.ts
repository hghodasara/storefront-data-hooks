/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */
export interface definitions {
    blogPost_Full: {
        /**
         * ID of this blog post. (READ-ONLY)
         */
        id?: number;
    } & definitions['blogPost_Base'];
    addresses: {
        /**
         * Full URL of where the resource is located.
         */
        url?: string;
        /**
         * Resource being accessed.
         */
        resource?: string;
    };
    formField: {
        /**
         * Name of the form field
         */
        name?: string;
        /**
         * Value of the form field
         */
        value?: string;
    };
    page_Full: {
        /**
         * ID of the page.
         */
        id?: number;
    } & definitions['page_Base'];
    redirect: {
        /**
         * Numeric ID of the redirect.
         */
        id?: number;
        /**
         * The path from which to redirect.
         */
        path: string;
        forward: definitions['forward'];
        /**
         * URL of the redirect. READ-ONLY
         */
        url?: string;
    };
    forward: {
        /**
         * The type of redirect. If it is a `manual` redirect then type will always be manual. Dynamic redirects will have the type of the page. Such as product or category.
         */
        type?: string;
        /**
         * Reference of the redirect. Dynamic redirects will have the category or product number. Manual redirects will have the url that is being directed to.
         */
        ref?: number;
    };
    customer_Full: {
        /**
         * Unique numeric ID of this customer. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
         */
        id?: number;
        /**
         * Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation.
         */
        _authentication?: {
            force_reset?: string;
            password?: string;
            password_confirmation?: string;
        };
        /**
         * The name of the company for which the customer works.
         */
        company?: string;
        /**
         * First name of the customer.
         */
        first_name: string;
        /**
         * Last name of the customer.
         */
        last_name: string;
        /**
         * Email address of the customer.
         */
        email: string;
        /**
         * Phone number of the customer.
         */
        phone?: string;
        /**
         * Date on which the customer registered from the storefront or was created in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
         */
        date_created?: string;
        /**
         * Date on which the customer updated their details in the storefront or was updated in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
         */
        date_modified?: string;
        /**
         * The amount of credit the customer has. (Float, Float as String, Integer)
         */
        store_credit?: string;
        /**
         * The customer’s IP address when they signed up.
         */
        registration_ip_address?: string;
        /**
         * The group to which the customer belongs.
         */
        customer_group_id?: number;
        /**
         * Store-owner notes on the customer.
         */
        notes?: string;
        /**
         * Used to identify customers who fall into special sales-tax categories – in particular, those who are fully or partially exempt from paying sales tax. Can be blank, or can contain a single AvaTax code. (The codes are case-sensitive.) Stores that subscribe to BigCommerce’s Avalara Premium integration will use this code to determine how/whether to apply sales tax. Does not affect sales-tax calculations for stores that do not subscribe to Avalara Premium.
         */
        tax_exempt_category?: string;
        /**
         * Records whether the customer would like to receive marketing content from this store. READ-ONLY.This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
         */
        accepts_marketing?: boolean;
        addresses?: definitions['addresses'];
        /**
         * Array of custom fields. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
         */
        form_fields?: definitions['formField'][];
        /**
         * Force a password change on next login.
         */
        reset_pass_on_login?: boolean;
    };
    categoryAccessLevel: {
        /**
         * + `all` - Customers can access all categories
         *  + `specific`  - Customers can access a specific list of categories
         * + `none` - Customers are prevented from viewing any of the categories in this group.
         */
        type?: 'all' | 'specific' | 'none';
        /**
         * Is an array of category IDs and should be supplied only if `type` is specific.
         */
        categories?: string[];
    };
    timeZone: {
        /**
         * a string identifying the time zone, in the format: <Continent-name>/<City-name>.
         */
        name?: string;
        /**
         * a negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time.
         */
        raw_offset?: number;
        /**
         * "-/+" offset from UTC/GMT, in seconds, during summer/daylight saving time.
         */
        dst_offset?: number;
        /**
         * a boolean indicating whether this time zone observes daylight saving time.
         */
        dst_correction?: boolean;
        date_format?: definitions['dateFormat'];
    };
    count_Response: {
        count?: number;
    };
    dateFormat: {
        /**
         * string that defines dates’ display format, in the pattern: M jS Y
         */
        display?: string;
        /**
         * string that defines the CSV export format for orders, customers, and products, in the pattern: M jS Y
         */
        export?: string;
        /**
         * string that defines dates’ extended-display format, in the pattern: M jS Y @ g:i A.
         */
        extended_display?: string;
    };
    blogTags: {
        tag?: string;
        post_ids?: number[];
    }[];
    blogPost_Base: {
        /**
         * Title of this blog post.
         */
        title: string;
        /**
         * URL for the public blog post.
         */
        url?: string;
        /**
         * URL to preview the blog post. (READ-ONLY)
         */
        preview_url?: string;
        /**
         * Text body of the blog post.
         */
        body: string;
        /**
         * Tags to characterize the blog post.
         */
        tags?: string[];
        /**
         * Summary of the blog post. (READ-ONLY)
         */
        summary?: string;
        /**
         * Whether the blog post is published.
         */
        is_published?: boolean;
        published_date?: definitions['publishedDate'];
        /**
         * Published date in `ISO 8601` format.
         */
        published_date_iso8601?: string;
        /**
         * Description text for this blog post’s `<meta/>` element.
         */
        meta_description?: string;
        /**
         * Keywords for this blog post’s `<meta/>` element.
         */
        meta_keywords?: string;
        /**
         * Name of the blog post’s author.
         */
        author?: string;
        /**
         * Local path to a thumbnail uploaded to `product_images/` via [WebDav](https://support.bigcommerce.com/s/article/File-Access-WebDAV).
         */
        thumbnail_path?: string;
    };
    publishedDate: {
        timezone_type?: string;
        date?: string;
        timezone?: string;
    };
    /**
     * Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation.
     */
    authentication: {
        force_reset?: string;
        password?: string;
        password_confirmation?: string;
    };
    customer_Base: {
        [key: string]: any;
    };
    page_Base: {
        /**
         * ID of any parent Web page.
         */
        parent_id?: number;
        /**
         * `page`: free-text page
         * `link`: link to another web address
         * `rss_feed`: syndicated content from an RSS feed
         * `contact_form`: When the store's contact form is used.
         */
        type: 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
        /**
         * Where the page’s type is a contact form: object whose members are the fields enabled (in the control panel) for storefront display. Possible members are:`fullname`: full name of the customer submitting the form; `phone`: customer’s phone number, as submitted on the form; `companyname`: customer’s submitted company name; `orderno`: customer’s submitted order number; `rma`: customer’s submitted RMA (Return Merchandise Authorization) number.
         */
        contact_fields?: string;
        /**
         * Where the page’s type is a contact form: email address that receives messages sent via the form.
         */
        email?: string;
        /**
         * Page name, as displayed on the storefront.
         */
        name: string;
        /**
         * Relative URL on the storefront for this page.
         */
        url?: string;
        /**
         * Description contained within this page’s `<meta/>` element.
         */
        meta_description?: string;
        /**
         * HTML or variable that populates this page’s `<body>` element, in default/desktop view. Required in POST if page type is `raw`.
         */
        body: string;
        /**
         * HTML to use for this page's body when viewed in the mobile template (deprecated).
         */
        mobile_body?: string;
        /**
         * If true, this page has a mobile version.
         */
        has_mobile_version?: boolean;
        /**
         * If true, this page appears in the storefront’s navigation menu.
         */
        is_visible?: boolean;
        /**
         * If true, this page is the storefront’s home page.
         */
        is_homepage?: boolean;
        /**
         * Text specified for this page’s `<title>` element. (If empty, the value of the name property is used.)
         */
        meta_title?: string;
        /**
         * Layout template for this page. This field is writable only for stores with a Blueprint theme applied.
         */
        layout_file?: string;
        /**
         * Order in which this page should display on the storefront. (Lower integers specify earlier display.)
         */
        sort_order?: number;
        /**
         * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
         */
        search_keywords?: string;
        /**
         * Comma-separated list of SEO-relevant keywords to include in the page’s `<meta/>` element.
         */
        meta_keywords?: string;
        /**
         * If page type is `rss_feed` the n this field is visisble. Required in POST required for `rss page` type.
         */
        feed: string;
        /**
         * If page type is `link` this field is returned. Required in  POST to create a `link` page.
         */
        link: string;
        content_type?: 'application/json' | 'text/javascript' | 'text/html';
    };
}
