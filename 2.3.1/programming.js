var programming =
[
    [ "Getting Started with the API", "basic_api.html", [
      [ "Connecting to a database", "basic_api.html#basic_connection", null ],
      [ "Creating a table", "basic_api.html#basic_create_table", null ],
      [ "Accessing data with cursors", "basic_api.html#basic_cursors", null ],
      [ "Closing handles", "basic_api.html#basic_close", null ]
    ] ],
    [ "Configuration Strings", "config_strings.html", [
      [ "Introduction", "config_strings.html#config_intro", null ],
      [ "JavaScript Object Notation (JSON) compatibility", "config_strings.html#config_json", null ]
    ] ],
    [ "Cursors", "cursors.html", "cursors" ],
    [ "Transactions", "transactions.html", [
      [ "ACID properties", "transactions.html#transactions_acid", null ],
      [ "Transactional API", "transactions.html#transactions_api", null ],
      [ "Implicit transactions", "transactions.html#transactions_implicit", null ],
      [ "Concurrency control", "transactions.html#transactions_concurrency", null ],
      [ "Isolation levels", "transactions.html#transaction_isolation", null ],
      [ "Checkpoints and Recovery", "transactions.html#transaction_recovery", null ]
    ] ],
    [ "Error handling", "error_handling.html", null ],
    [ "Schema, Columns, Column Groups, Indices and Projections", "schema.html", "schema" ],
    [ "Log-Structured Merge Trees", "lsm.html", [
      [ "Background", "lsm.html#lsm_background", null ],
      [ "Description of LSM trees", "lsm.html#lsm_description", null ],
      [ "Interface to LSM trees", "lsm.html#lsm_api", null ],
      [ "Merging", "lsm.html#lsm_merge", null ],
      [ "Bloom filters", "lsm.html#lsm_bloom", null ],
      [ "Creating tables using LSM trees", "lsm.html#lsm_schema", null ],
      [ "Caveats", "lsm.html#lsm_caveats", [
        [ "Hazard configuration", "lsm.html#lsm_hazard", null ],
        [ "Empty values", "lsm.html#lsm_tombstones", null ],
        [ "Named checkpoints", "lsm.html#lsm_checkpoints", null ]
      ] ]
    ] ],
    [ "File formats and compression", "file_formats.html", "file_formats" ],
    [ "Compressors", "compression.html", [
      [ "Using zlib compression", "compression.html#compression_zlib", null ],
      [ "Using snappy compression", "compression.html#compression_snappy", null ],
      [ "Using bzip2 compression", "compression.html#compression_bzip2", null ],
      [ "Upgrading compression engines", "compression.html#compression_upgrading", null ],
      [ "Custom compression engines", "compression.html#compression_custom", null ]
    ] ],
    [ "Multithreading", "threads.html", [
      [ "Code samples", "threads.html#threads_example", null ]
    ] ],
    [ "Name spaces", "name_space.html", [
      [ "Process' environment name space", "name_space.html#env", null ],
      [ "C language name space", "name_space.html#c", null ],
      [ "File system name space", "name_space.html#filename", null ],
      [ "Error return name space", "name_space.html#error", null ]
    ] ],
    [ "Signal handling", "signals.html", null ],
    [ "Checkpoints", "checkpoints.html", null ],
    [ "Compaction", "compaction.html", null ],
    [ "Hot backup", "hot_backup.html", [
      [ "Hot backup from the command line", "hot_backup.html#hot_backup_util", null ]
    ] ],
    [ "Statistics", "statistics.html", [
      [ "Statistics logging", "statistics.html#statistics_log", null ]
    ] ],
    [ "Asynchronous operations", "async.html", [
      [ "Configuring asynchronous operations", "async.html#async_config", null ],
      [ "Allocating an asynchronous operations handle", "async.html#async_alloc", null ],
      [ "Executing asynchronous operations", "async.html#async_operations", null ],
      [ "Waiting for outstanding operations to complete", "async.html#async_flush", null ],
      [ "Asynchronous operations and transactions", "async.html#async_transactions", null ]
    ] ],
    [ "Per-process shared caches", "shared_cache.html", null ],
    [ "Custom Data Sources", "custom_data_sources.html", [
      [ "WT_DATA_SOURCE methods", "custom_data_sources.html#custom_ds_methods", [
        [ "WT_DATA_SOURCE::create method", "custom_data_sources.html#custom_ds_create", null ]
      ] ],
      [ "WT_CURSOR methods", "custom_data_sources.html#custom_ds_cursor_methods", [
        [ "WT_CURSOR::insert method", "custom_data_sources.html#custom_ds_cursor_insert", null ]
      ] ],
      [ "WT_CURSOR key/value fields", "custom_data_sources.html#custom_ds_cursor_fields", null ],
      [ "Error handling", "custom_data_sources.html#custom_ds_error_handling", null ],
      [ "Configuration strings", "custom_data_sources.html#custom_ds_config", [
        [ "Parsing configuration strings", "custom_data_sources.html#custom_ds_config_parsing", null ],
        [ "Creating data-specific configuration strings", "custom_data_sources.html#custom_ds_config_add", null ]
      ] ],
      [ "WT_COLLATOR", "custom_data_sources.html#custom_ds_cursor_collator", null ],
      [ "Serialization", "custom_data_sources.html#custom_data_source_cursor_serialize", null ]
    ] ],
    [ "WiredTiger Helium support", "helium.html", [
      [ "Building the WiredTiger Helium Support", "helium.html#helium_build", null ],
      [ "Loading the WiredTiger Helium Support", "helium.html#helium_load", null ],
      [ "Creating WiredTiger objects on Helium volumes", "helium.html#helium_objects", null ],
      [ "Helium notes", "helium.html#helium_notes", null ],
      [ "Helium limitations", "helium.html#helium_limitations", null ]
    ] ]
];