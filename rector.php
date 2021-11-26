<?php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Rector\Set\ValueObject\DowngradeSetList;

return static function (ContainerConfigurator $configurator) : void {

    $configurator->import(DowngradeSetList::PHP_80);
    $configurator->import(DowngradeSetList::PHP_74);
    $configurator->import(DowngradeSetList::PHP_73);
    $configurator->import(DowngradeSetList::PHP_72);
    $configurator->import(DowngradeSetList::PHP_71);
    $configurator->import(DowngradeSetList::PHP_70);

};